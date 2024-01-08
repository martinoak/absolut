<?php

namespace App\Models\Facades;

use Illuminate\Support\Facades\DB;
use Nette\Utils\Strings;

class Facade
{
    public function getBottles(): array
    {
        return DB::table('bottles')->orderBy('name')->get()->toArray();
    }

    public function getBottleByHandle(string $handle): object
    {
        return DB::table('bottles')->where('handle', $handle)->first();
    }

    public function storeNewBottle(array $data, string $path): void
    {
        DB::table('bottles')->insert([
            'name' => 'Absolut '.$data['name'],
            'handle' => Strings::webalize($data['name']),
            'filter' => $data['filter'],
            'since' => $data['since'],
            'totalAmount' => $data['totalAmount'],
            'price' => $data['price'],
            'description' => $data['description'],
            'frontPhoto' => $path,
        ]);
    }

    public function updateBottle(int $id, array $what): void
    {
        DB::table('bottles')->where('id', $id)->update($what);
    }
}
