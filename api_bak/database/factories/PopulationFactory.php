<?php

use App\Models\Level\Level;
use Faker\Generator as Faker;

$factory->define(App\Models\Level\Population::class, function (Faker $faker) {
    return [
        'level_id' => function(){
            return Level::all()->random();
        },
        'population' => $faker->numberBetween($min = 1000, $max = 9000)
    ];
});
