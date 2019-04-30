<?php

use App\Models\InstitutionCategory;
use Faker\Generator as Faker;

$factory->define(App\Models\Institution::class, function (Faker $faker) {
    return [
        'name'=> $faker->company,
        'logo'=> $faker->imageUrl(),
        'acronym'=> $faker->companySuffix,
        'description'=> $faker->text,
        'foundation_year'=> $faker->year,
        'organe_tutelle'=> $faker->country,
        'country_seat'=> $faker->country,
        'areas_intervention'=> $faker->domainWord,
        'target_beneficiary'=> $faker->company,
        'web_site'=> $faker->url,
        'email'=> $faker->companyEmail,
        'phone'=> $faker->phoneNumber,
        'address'=> $faker->address,
        'institution_category_id'=> function () {
            return InstitutionCategory::all()->random();
        },
    ];
});
