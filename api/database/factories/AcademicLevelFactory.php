<?php

use Faker\Generator as Faker;

$factory->define(App\Models\AcademicLevel::class, function (Faker $faker) {
    return [

        // 'name'=> $faker->company,
        // 'bac_level'=> $faker->company,





        'name' => function () {
            return collect([
                'Baccalaureat',
                'BTS',
                'Licence',
                'DEUT',
                'MASTER',
                'INGENIEUR',
                'DEESA',
                'DOCTORAT',
            ])->random();
        },

        'bac_level' => function () {
            return collect([
                'bac',
                'bac+1',
                'bac+2',
                'bac+3',
                'bac+4',
                'bac+5',
                'bac+8',

            ])->random();
        },
    ];
});
