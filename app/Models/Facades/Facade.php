<?php

namespace App\Models\Facades;

use Illuminate\Support\Facades\DB;

class Facade
{
    public function getBottles(): array
    {
        return DB::table('bottles')->get()->toArray();
    }

    public function getBottlesSorted($sort): array
    {
        return DB::table('bottles')->orderBy('name', $sort)->get()->toArray();
    }

    public function getBottle(string $name): object
    {
        return DB::table('bottles')->where('name', $name)->first();
    }

    public function getBottlesByFilter(string $filter): array
    {
        return DB::table('bottles')->where('filter', $filter)->get()->toArray();
    }
}
