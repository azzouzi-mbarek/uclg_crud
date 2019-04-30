<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Indicator\CategoryIndicator::class, function (Faker $faker) {
    return [
        'name' => $faker->word,

    ];
});
