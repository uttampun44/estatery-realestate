<?php

namespace App\Models\Option;

use App\Models\Properties;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Option extends Model
{
    protected $table = "options";

    protected $fillable = ['sale_rent', 'properties_category_id'];

    public function adminproperties(): BelongsTo
    {
        return $this->belongsTo(Properties::class, 'properties_category_id');
    }

    use HasFactory;
}
