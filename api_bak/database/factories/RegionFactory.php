<?php

use App\Models\User;
use Faker\Generator as Faker;

$factory->define(App\Models\Region::class, function (Faker $faker) {
    return [
        'name' => function () {
            return collect([
                'Afrique orientale',
                'Afrique centrale',
                'Afrique du nord',
                'Afrique occidentale',
                'Afrique australe'
            ])->random();

        },

    ];
});
