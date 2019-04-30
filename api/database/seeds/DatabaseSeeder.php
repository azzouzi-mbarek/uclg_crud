<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        factory(App\Models\User::class, 1)->create();
        factory(App\Models\Region::class, 5)->create();
        factory(App\Models\Country::class, 4)->create();
        factory(App\Models\Country_population::class, 12)->create();
        factory(App\Models\InstitutionCategory::class, 10)->create();
        factory(App\Models\Institution::class, 20)->create();
        factory(App\Models\AcademicLevel::class, 10)->create();
        factory(App\Models\Person::class, 10)->create();

    }
}
