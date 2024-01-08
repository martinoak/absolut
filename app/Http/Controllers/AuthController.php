<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function login(): View
    {
        return view('login');
    }

    public function authenticate(Request $request): RedirectResponse
    {
        Auth::attempt($request->only('email', 'password'));

        return to_route('bottles.create');
    }
}
