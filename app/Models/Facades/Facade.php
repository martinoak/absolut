<?php

namespace App\Models\Facades;

use Illuminate\Support\Facades\DB;

class Facade
{
    public function getBottles(): array
    {
        return DB::table('bottles')->orderBy('name')->get()->toArray();
    }

    public function getBottle(string $name): object
    {
        return DB::table('bottles')->where('name', $name)->first();
    }
}
