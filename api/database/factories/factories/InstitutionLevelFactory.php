<?php

use App\Models\Institution\Institution;
use App\Models\Level\CategoryLevelInstitution;
use App\Models\Level\InstitutionLevel;
use App\Models\Level\Level;
use Faker\Generator as Faker;

$factory->define(InstitutionLevel::class, function (Faker $faker) {
    return [
        'institution_id' => function () {
            return Institution::all()->random();
        },
        'level_id' => function () {
            return Level::all()->random();
        },
        'type_partnership'=>function(){
        return collect([
            'Partenaires financiers',
            'Partenaires au Development',
            'Partenaires cooperation decentralisé',
            'autres',
        ])->random();
        }
    ];
});
