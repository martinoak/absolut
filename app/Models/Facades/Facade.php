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

    public function updateBottle(int $id, array $what): void
    {
        DB::table('bottles')->where('id', $id)->update($what);
    }
}
