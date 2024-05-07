<?php

namespace App\Models;

use App\Models\Option\Option;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Addproperties extends Model
{
    public $table = "properties_descriptions";

    public $fillable = [
        "agent_name",
        "properties_types",
        "buy_rent",
        "number_of_bedrooms",
        "number_of_bathrooms",
        "square_areas",
        "cooling",
        "heating",
        "parking_areas",
        "depost_fees",
        "location",
        "year_built",
        "total_area",
        "status",
        "image",
        "description",
        "agent_id"
      ];

      public function Properties():BelongsTo
      {
        return $this->belongsTo(Properties::class);
      }

      public function option():BelongsTo
      {
         return $this->belongsTo(Option::class);
      }
    use HasFactory;
}
