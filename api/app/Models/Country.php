<?php

namespace App\Models;

use App\Models\Country_population;
use App\Models\Region;
use Grimzy\LaravelMysqlSpatial\Eloquent\SpatialTrait;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{

    use spatialTrait;

    protected $spatialFields = ['geom'];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function populations()
    {
        return $this->hasMany(Country_population::class);
    }
}
