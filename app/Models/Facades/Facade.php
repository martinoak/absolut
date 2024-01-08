<?php

namespace App\Models\Facades;

use Illuminate\Support\Facades\DB;

class Facade
{
    public function getBottles(): array
    {
        return DB::table('bottles')->orderBy('name')->get()->toArray();
    }

    public function getBottleDescription(string $name): string
    {
        return DB::table('bottles')->where('name', $name)->first()->description ?? '';
    }

    public function storeNewBottle(array $data, string $path): void
    {
        DB::table('bottles')->insert([
            'name' => 'Absolut '.$data['name'],
            'filter' => $data['filter'],
            'since' => $data['since'],
            'totalAmount' => $data['totalAmount'],
            'description' => $data['description'],
            'frontPhoto' => $path,
        ]);
    }
}
