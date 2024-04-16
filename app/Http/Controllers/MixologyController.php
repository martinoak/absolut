<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Recipe;
use Illuminate\View\View;

class MixologyController extends Controller
{
    public function index(): View
    {
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
}
