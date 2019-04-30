<?php

namespace App\Http\GraphQl;

use App\Models\LevelCategory;

class Query
{

    public function categoriesLevels($root, array $args)
    {
        return LevelCategory::all();
    }
}
