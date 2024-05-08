<?php

namespace App\Models\Option;

use App\Models\Addproperties;
use App\Models\Properties;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Option extends Model
{
    protected $table = "options";

    protected $fillable = ['sale_rent'];

    public function propertiesDescription():HasMany
    {
        return $this->hasMany(Addproperties::class);
    }

    use HasFactory;
}
