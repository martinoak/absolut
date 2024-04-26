<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('possible-cocktails', [App\Http\Controllers\MixologyController::class, 'getPossibleCocktails']);
