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

        $request->file('image')->storeAs('recipes/', $recipe->slug . '.jpg');
        $path = public_path('images/recipes/' . $recipe->slug . '.jpg');
        $recipe->image = $path;
        $recipe->video_href = $request->input('video_href');
        $recipe->description = $request->input('description');

        $ingredients = [];
        for ($i = 0; $i < count($request->input('ing')); $i += 2) {
            if (isset($ing[$i]['part']) && isset($ing[$i+1]['what'])) {
                $part = $ing[$i]['part'];
                $what = $ing[$i+1]['what'];
                if ($part !== null && $what !== null) {
                    $ingredients[] = ['part' => $part, 'what' => $what];
                }
            }
        }

        $recipe->ingredients = json_encode($ingredients);
        $recipe->save();

        return to_route('mixology.index');
    }

    public function show(string $id)
    {
        //
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
