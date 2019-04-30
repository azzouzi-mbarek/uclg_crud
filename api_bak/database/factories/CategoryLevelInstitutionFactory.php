<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Level\CategoryLevelInstitution::class, function (Faker $faker) {
    return [
        'name' => function () {
            return collect([
                'Partenaires Financier',
                'Partenaires au Development',
                'Partenaires Cooperation Décentralisé',
                'Autre type Partenaires ',
            ])->random();
        },
    ];
});
