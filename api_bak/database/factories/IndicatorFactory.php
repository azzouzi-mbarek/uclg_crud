<?php
use App\Models\Indicator\CategoryIndicator;
use Faker\Generator as Faker;

$factory->define(App\Models\Indicator\Indicator::class, function (Faker $faker) {
    return [
        'category_indicator_id' => function () {
            return CategoryIndicator::all()->random();
        },
        'name'=> $faker->word,
    ];
});
