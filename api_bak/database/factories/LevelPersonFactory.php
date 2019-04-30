<?php

use App\Models\Level\Level;
use App\Models\Person\CategoryPerson;
use App\Models\Person\LevelPerson;
use App\Models\Person\Person;
use Faker\Generator as Faker;

$factory->define(LevelPerson::class, function (Faker $faker) {
    return [
        'person_id' => function () {
            return Person::all()->random();
        },
        'level_id' => function () {
            return Level::all()->random();
        },
        'category_person_id' => function () {
            return CategoryPerson::all()->random();
        },
        'function' => function () {
            return collect([
                'Maire',
                'Adjoint Maire',
                'President de conseil ',
                'Vice President de conseil ',
                'Membre de conseil',
            ])->random();
        },
        'status' => function () {
            return collect([
                'nommé',
                'élu',
            ])->random();
        },
        'start_date'=> $faker->date($format = 'Y-m-d', $max = 'now'),
        'end_date'=> $faker->date($format = 'Y-m-d', $max = 'now'),

    ];
});
