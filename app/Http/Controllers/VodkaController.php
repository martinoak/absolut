<?php

namespace App\Http\Controllers;

use App\Models\Facades\Facade;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Nette\Utils\Strings;

class VodkaController extends Controller
{
    public function __construct(
        private readonly Facade $facade,
    ) {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function show(string $bottle): View
    {
        $data = $this->facade->getBottleByHandle($bottle);
        $bottles = $this->facade->getBottles();

        return view('detail', compact(['data', 'bottles']));
    }

    public function create(): View
    {
        return view('new');
    }

    public function edit(string $handle): View
    {
        $bottle = DB::table('bottles')->where('handle', $handle)->first();

        return view('edit', compact('bottle'));
    }

    public function update(Request $request, string $handle): RedirectResponse
    {
        DB::table('bottles')->where('handle', $handle)->update([
            'name' => request('name') ?? '',
            'handle' => Strings::webalize(request('name') ?? '') ?? '',
            'filter' => request('filter') ?? '',
            'since' => request('since') ?? '',
            'totalAmount' => request('totalAmount') ?? '',
            'frontPhoto' => request('frontPhoto') ?? '',
            'price' => request('price') ?? ''
        ]);

        return to_route('admin.db');
    }

    public function store(Request $request): RedirectResponse
    {
        $file = $request->file('frontPhoto')->getClientOriginalName();
        $request->file('frontPhoto')->storePubliclyAs('bottles/', $file, 'local');
        $this->facade->storeNewBottle($request->all(), $file);

        return to_route('admin.dashboard');
    }

    public function destroy(string $bottle): RedirectResponse
    {
        DB::table('bottles')->where('handle', $bottle)->delete();

        return back()->with('success', 'Deleted');
    }
}
