<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Properties extends Model
{
    protected $table = "properties";

    protected $fillable = ['properties_categories', 'properties_slug'];

    use HasFactory;
}
