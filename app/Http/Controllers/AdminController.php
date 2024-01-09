<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function dashboard(): View
    {
        $total = 0;
        foreach (DB::table('bottles')->get()->toArray() as $bottle) {
            $total += $bottle->price;
        }
        return view('admin.dashboard', compact('total'));
    }

    public function db(): View
    {
        $bottles = DB::table('bottles')->get()->toArray();
        return view('admin.db', compact('bottles'));
    }
}
