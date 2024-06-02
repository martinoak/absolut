<?php

namespace App\Http\Controllers;

use App\Models\Occasion;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class OccasionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('occasions.index', [
            'occasions' => Occasion::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('occasions.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $slug = Str::slug($request->input('name'));

        Occasion::create([
            'slug' => $slug,
            'name' => $request->input('name'),
        ]);

        return to_route('occasions.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): View
    {
        $occasion = Occasion::findOrFail($id);
        $cocktailsSlug = explode(',', $occasion->cocktails);
        foreach ($cocktailsSlug as $slug) {
            $cocktails[] = Recipe::findOrFail($slug);
        }

        return view('occasions.show', [
            'occasion' => Occasion::findOrFail($id),
            'cocktails' => $cocktails,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): View
    {
        return view('occasions.edit', [
            'occasion' => Occasion::findOrFail($id),
            'cocktails' => Occasion::where('slug', $id)->pluck('cocktails')->first(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
