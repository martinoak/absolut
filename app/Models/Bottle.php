<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bottle extends Model
{
    use HasFactory;

    protected $table = 'bottles';
    protected $primaryKey = 'handle';
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'handle',
        'name',
        'filter',
        'set',
        'since',
        'totalAmount',
        'description',
        'frontPhoto',
        'price',
    ];

}
