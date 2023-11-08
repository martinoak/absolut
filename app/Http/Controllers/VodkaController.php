<?php

namespace App\Http\Controllers;

use App\Models\Facades\Facade;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class VodkaController extends Controller
{
    public function __construct(
        private readonly Facade $facade,
    ) {
    }

    public function index(): View
    {
        return view('home', [
            'bottles' => $this->facade->getBottles(),
        ]);
    }

    public function apiBottles(Request $request): JsonResponse
    {
        $sort = $request->input('sort') ?? 'asc';
        $bottles = $this->facade->getBottlesSorted($sort);
        return response()->json($bottles);
    }
}
