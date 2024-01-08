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
        return view('home', [
            'bottles' => $this->facade->getBottles(),
        ]);
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

    public function store(Request $request): RedirectResponse
    {
        $file = $request->file('frontPhoto')->getClientOriginalName();
        $request->file('frontPhoto')->storePubliclyAs('/', $file, 'local');
        $this->facade->storeNewBottle($request->all(), $file);

        return to_route('bottles.index');
    }
}
