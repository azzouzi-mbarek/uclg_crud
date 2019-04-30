<?php

use App\Models\Country;
use App\Models\LevelCategory;
use Faker\Generator as Faker;

$factory->define(App\Models\Level\Level::class, function (Faker $faker) {

    return [
        'name' => $faker->country,

        'country_id' => function () {
            return Country::all()->random();
        },
        'category_level_id' => function () {
            return LevelCategory::all()->random();
        },


        'level_id' => null,
        'web_site' => $faker->url,
        'email' => $faker->companyEmail,
        'number_phone' => $faker->phoneNumber,
        'address' => $faker->address,
        'population' => $faker->numberBetween($min = 40000, $max = 6000000),
        'census_date_population' => $faker->year($max = 'now') ,

    ];
});
