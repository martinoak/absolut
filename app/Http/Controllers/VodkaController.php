<?php

namespace App\Http\Controllers;

use App\Models\Facades\Facade;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class VodkaController extends Controller
{
    public function __construct(
        private readonly Facade $facade,
    ) {
        $this->middleware('auth')->except(['index']);
    }

    public function index(Request $request): View
    {
        $flavor = $request->input('flavors') ? 'Flavors & Premium' : null;
        $cities = $request->input('cities') ? 'City series' : null;
        $limited = $request->input('limited') ? 'Limited Edition' : null;
        $sorted = $this->facade->getBottles();

        $final = [];
        if (request('flavors')) {
            $final += array_filter($sorted, fn ($bottle) => $bottle->filter === $flavor);
        }

        if (request('cities')) {
            $final += array_filter($sorted, fn ($bottle) => $bottle->filter === $cities);
        }

        if (request('limited')) {
            $final += array_filter($sorted, fn ($bottle) => str_contains(strtolower($bottle->filter), strtolower($limited)));
        }

        return view('home', [
            'bottles' => count($final) > 0 ? $final : $sorted,
        ]);
    }

    public function show(string $bottle): View
    {
        $data = $this->facade->getBottleByName($bottle);
        return view('detail', compact('data'));
    }

    public function create(): View
    {
        return view('new');
    }

    public function store(Request $request): RedirectResponse
    {
        $file = $request->file('frontPhoto')->getClientOriginalName();
        $request->file('frontPhoto')->storePubliclyAs('/', $file, 'local');

        $this->facade->storeNewBottle($request->all(), $file);

        return to_route('bottles.index');
    }
}
