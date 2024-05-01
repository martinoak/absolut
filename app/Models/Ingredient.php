<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $table = 'ingredients';
    protected $primaryKey = 'slug';
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'slug',
    ];
}
