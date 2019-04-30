<?php

use Faker\Generator as Faker;

$factory->define(App\Models\LevelCategory::class, function (Faker $faker) {
    return [
        'name' => function () {
            return collect([
                'Region',
                'Province',
                'Commune',
                'Wilaya',
                'Gouvernorat',
                'Prefecture',
                'Province',
                'District',
                'District council',
                'Urban council',
                'Municipalité',

                // 'Metropolitan municipality',
                // 'Local municipality',
                // 'District Municipality',
                // 'City council',
                // 'Community council',
                // 'Urban District',
                // 'Rural District',
                // 'Town',
                // 'Village council',
                // 'Rural council',
                // 'Council of Sectors',
                // 'Metropole',
                'Commune urbaine',
                'Commune rurale',
                // 'Counties',
                // 'Communauté urbaine',
                // 'Local government',
                // 'Ville',
                // 'Département',
                // 'Municipal council',
                // 'Sub-county council',
                // 'State',
                // 'Wards',
                // 'Hamlet',
                // 'Secteur',
                // 'Chefferie',
                // 'Communauté rurale',
                // 'Association national',

            ])->random();
        },
    ];
});
