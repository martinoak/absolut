<?php

namespace App\Models\Facades;

use Illuminate\Support\Facades\DB;

class Facade
{
    public function getBottles(): array
    {
        return DB::table('bottles')->orderBy('name')->get()->toArray();
    }

    public function getBottleByName(string $name): object
    {
        return DB::table('bottles')->where('name', $name)->first();
    }

    public function storeNewBottle(array $data, string $path): void
    {
        DB::table('bottles')->insert([
            'name' => 'Absolut '.$data['name'],
            'filter' => $data['filter'],
            'since' => $data['since'],
            'totalAmount' => $data['totalAmount'],
            'price' => $data['price'],
            'description' => $data['description'],
            'frontPhoto' => $path,
        ]);
    }
}
