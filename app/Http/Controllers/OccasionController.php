<?php

namespace App\Http\Controllers;

use App\Models\Occasion;
use App\Models\Recipe;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class OccasionController extends Controller
{
    public function index(): View
    {
        return view('admin.occasions.index', [
            'occasions' => Occasion::all(),
        ]);
    }

    public function create(): View
    {
        return view('admin.occasions.create');
    }

    public function store(Request $request): RedirectResponse
    {
        $slug = Str::slug($request->input('name'));

        Occasion::create([
            'slug' => $slug,
            'name' => $request->input('name'),
        ]);

        return to_route('admin.occasions.index');
    }

    public function show(string $id): View
    {
        $occasion = Occasion::where('slug', $id)->first();
        $cocktailsSlug = $occasion->cocktails ? explode(',', $occasion->cocktails) : [];
        $cocktails = [];
        if (!empty($cocktailsSlug)) {
            foreach ($cocktailsSlug as $slug) {
                $cocktails[] = Recipe::where('slug', $slug)->first();
            }
        }

        return view('occasion', [
            'occasion' => $occasion,
            'cocktails' => $cocktails,
        ]);
    }

    public function edit(string $id): View
    {
        $occasion = Occasion::where('slug', $id)->first();

        return view('occasions.edit', [
            'occasion' => $occasion,
            'cocktails' =>$occasion->pluck('cocktails')->toArray(),
        ]);
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
