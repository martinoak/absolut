<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MixologyController;
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

Route::view('/', 'home')->name('bottles.index');

Route::resource('bottles', VodkaController::class)->except(['index']);
Route::view('/sets', 'sets')->name('sets.index');

Route::prefix('mixology')->group(function () {
    Route::get('lookup', [MixologyController::class, 'lookup'])->name('mixology.lookup');
    Route::get('with/{with}', [MixologyController::class, 'with'])->name('mixology.with');
});
Route::resource('mixology', MixologyController::class);

Route::get('login', [AuthController::class, 'login'])->name('login');
Route::post('authenticate', [AuthController::class, 'authenticate'])->name('authenticate');

Route::group(['middleware' => 'auth', 'prefix' => 'admin'], function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('db', [AdminController::class, 'db'])->name('admin.db');
});
