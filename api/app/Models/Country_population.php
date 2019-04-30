<?php

namespace App\Models;

use App\Models\Country;
use Illuminate\Database\Eloquent\Model;

class Country_population extends Model
{
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
