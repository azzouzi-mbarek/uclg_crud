<?php

use App\Models\Level\Level;
use Faker\Generator as Faker;

$factory->define(App\Models\Level\LegalFramework::class, function (Faker $faker) {
    return [
        'level_id' => function(){
            return Level::all()->random();
        },
        'name' => $faker->name,
        'url' => $faker->url,
    ];
});
