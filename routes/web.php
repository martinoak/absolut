<?php

use App\Http\Controllers\VodkaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [VodkaController::class, 'index'])->name('homepage');
Route::get('/bottles/{bottle}', [VodkaController::class, 'detail'])->name('bottle.detail');
