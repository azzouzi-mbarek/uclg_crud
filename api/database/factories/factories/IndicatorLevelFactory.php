<?php

use App\Models\Indicator\Indicator;
use App\Models\Level\Level;
use Faker\Generator as Faker;

$factory->define(App\Models\Indicator\IndicatorLevel::class, function (Faker $faker) {
    return [
        'indicator_id' => function () {
            return Indicator::all()->random();
        },
        'level_id' => function () {
            return Level::all()->random();
        },
        'note'=> $faker->numberBetween($min = 1, $max = 5)
    ];
});