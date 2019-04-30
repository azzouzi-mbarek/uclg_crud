<?php

namespace App\Http\GraphQL\Queries;

use App\Models\Region;

class RegionQueries
{
    public function regions($root, array $args)
    {

        return $regions = Region::all();
    }
}
