<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Institution\CategoryInstitution::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
