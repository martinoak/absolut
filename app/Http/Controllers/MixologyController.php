<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Recipe;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class MixologyController extends Controller
{
    public function index(): View
    {
        Cache::remember('recipes', 10800, function () {
            return Recipe::all();
        });

        return view('mixology.index', [
            'recipes' => Recipe::all()
        ]);
    }

    public function create(): View
    {
        return view('mixology.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $recipe = new Recipe();
        $recipe->name = $request->input('name');
        $recipe->slug = $request->input('slug');

        $request->file('image')->storeAs('recipes/', $request->file('image')->getClientOriginalName());
        $path = 'images/recipes/' . $request->file('image')->getClientOriginalName();
        $recipe->image = $path;
        $recipe->video_href = $request->input('video_href');
        $recipe->description = $request->input('description');

        $ingredients = [];
        $ing = $request->input('ing');
        for ($i = 0; $i < count($ing); $i += 2) {
            if (isset($ing[$i]['part'], $ing[$i+1]['what'])) {
                $part = $ing[$i]['part'];
                $what = $ing[$i+1]['what'];
                if ($part !== null && $what !== null) {
                    $ingredients[] = [$part => $what];
                }
            }
        }

        $recipe->ingredients = json_encode($ingredients);
        $recipe->save();

        return to_route('mixology.index');
    }

    public function show(string $recipe): View
    {
        return view('mixology.show', [
            'recipe' => Recipe::where('slug', $recipe)->first()
        ]);
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }

    public function lookup(): View
    {
        /* Get all ingredients from all recipes, remove duplicities and show them as array */
        $ingredients = Recipe::all()->map(function ($recipe) {
            return json_decode($recipe->ingredients);
        })->flatten()->unique()->values();

        foreach ($ingredients as $ingredient) {
            $lookup[] = array_values((array) $ingredient)[0];
        }

        return view('mixology.lookup', [
            'ingredients' => array_unique(array_values($lookup)) ?? []
        ]);
    }

    public function getPossibleCocktails(Request $request): JsonResponse
    {
        $ingredients = $request->input('ingredients');
        $recipes = Recipe::all()->filter(function ($recipe) use ($ingredients) {
            $recipeIngredients = json_decode($recipe->ingredients);
            $recipeIngredients = array_map(function ($ingredient) {
                return array_values((array) $ingredient)[0];
            }, $recipeIngredients);

            // Check if all recipe ingredients are in the selected ingredients
            return empty(array_diff($recipeIngredients, $ingredients));
        });

        return response()->json($recipes);
    }

    public function with(string $with): View
    {
        $recipes = Recipe::all()->filter(function ($recipe) use ($with) {
            $recipeIngredients = json_decode($recipe->ingredients);
            $recipeIngredients = array_map(function ($ingredient) {
                return array_values((array) $ingredient)[0];
            }, $recipeIngredients);

            return in_array($with, $recipeIngredients);
        });

        return view('mixology.with', [
            'recipes' => $recipes,
            'with' => $with
        ]);
    }
}
