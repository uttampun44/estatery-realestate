<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Properties extends Model
{
    protected $table = "properties";

    protected $fillable = ['properties_categories', 'properties_slug'];


    public function propertiesDescription():HasMany
    {
        return $this->hasMany(Addproperties::class);

    }
    use HasFactory;
}
