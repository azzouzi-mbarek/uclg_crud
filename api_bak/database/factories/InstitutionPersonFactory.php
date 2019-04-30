<?php

use App\Models\Institution\Institution;
use App\Models\Person\CategoryPerson;
use App\Models\Person\InstitutionPerson;
use App\Models\Person\Person;
use Faker\Generator as Faker;

$factory->define(InstitutionPerson::class, function (Faker $faker) {
    return [
        'person_id' => function () {
            return Person::all()->random();
        },
        'Institution_id' => function () {
            return Institution::all()->random();
        },
        'category_person_id' => function () {
            return CategoryPerson::all()->random();
        },
    ];
});
