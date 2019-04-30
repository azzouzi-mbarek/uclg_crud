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
        // $this->call(UsersTableSeeder::class);
        // factory(App\Models\User::class, 1)->create();

        // factory(App\Models\Region::class, 5)->create();
        // factory(App\Models\Country::class, 54)->create();
        factory(App\Models\LevelCategory::class, 37)->create();
        // factory(App\Models\Level\Level::class, 100)->create();
        // $this->call(LevelSeeder::class);

        //   factory(App\Models\Level\Population::class, 20)->create();
        // factory(App\Models\Level\LegalFramework::class, 20)->create();
        // factory(App\Models\Level\CommunicationTool::class, 100)->create();
        // factory(App\Models\Level\Finance::class, 100)->create();
        // factory(App\Models\Level\Evenement::class, 100)->create();
        // factory(App\Models\Level\Programme::class, 100)->create();

        // factory(App\Models\Person\AcademicLevel::class, 20)->create();
        // factory(App\Models\Person\CategoryPerson::class, 50)->create();
        // factory(App\Models\Person\Person::class, 200)->create();
        // factory(App\Models\Person\LevelPerson::class, 600)->create();

        // factory(App\Models\Person\CategoryPerson::class, 50)->create();
        // factory(App\Models\Institution\CategoryInstitution::class, 10)->create();

        // factory(App\Models\Institution\Institution::class, 80)->create();

        // factory(App\Models\Level\CategoryLevelInstitution::class, 4)->create();

        // factory(App\Models\Level\InstitutionLevel::class, 100)->create();

//        factory(App\Models\Person\InstitutionPerson::class,50)->create();

        // factory(App\Models\Person\CountryPerson::class, 50)->create();

        //        factory(App\Models\Institution\CountryInstitution::class,50)->create();
    }
}
