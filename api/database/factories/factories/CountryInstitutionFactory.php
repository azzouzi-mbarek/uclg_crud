<?php

use App\Models\Country;
use App\Models\Institution\CountryInstitution;
use App\Models\Institution\Institution;
use Faker\Generator as Faker;

$factory->define(CountryInstitution::class, function (Faker $faker) {
    return [
        'institution_id' => function () {
            return Institution::all()->random();
        },
        'country_id' => function () {
            return Country::all()->random();
        },
    ];
});
