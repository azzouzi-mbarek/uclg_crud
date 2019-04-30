<?php

use App\Models\Person\AcademicLevel;
use Faker\Generator as Faker;

$factory->define(App\Models\Person\Person::class, function (Faker $faker) {
    return array(
        'image_url' => $faker->imageUrl($width = 640, $height = 480),
        'sex' => function () {
            return collect([
                'male',
                'female',
            ])->random();
        },
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'birthday' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'nationality' => $faker->country,
        'academic_level_id' => function () {
            return AcademicLevel::all()->random();
        },
        'study_area' => $faker->jobTitle,
        'short_biography' => $faker->text,
        'email' => $faker->email,
        'number_phone' => $faker->phoneNumber,
    );
});
