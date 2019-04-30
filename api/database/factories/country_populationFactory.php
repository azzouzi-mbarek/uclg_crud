<?php

use App\Models\Country;
use App\Models\Country_population;
use Faker\Generator as Faker;

$factory->define(Country_population::class, function (Faker $faker) {
    return [

        'population' => $faker->numberBetween($min = 1000, $max = 9000),
        'year' => $faker->date,
        'country_id' => function () {
            return Country::all()->random();
        },
    ];
});
