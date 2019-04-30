<?php

use App\Models\LevelCategory;
use App\Models\Level\Level;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function getIdsLevel1()
    {
        $tab = ['level_id' => null, 'country_id' => null, 'category_level_id' => null];
        $level = Level::where('level_id', null)->get()->random();
        $tab['level_id'] = $level->id;
        $tab['country_id'] = $level->country_id;
        $tab['category_level_id'] = LevelCategory::all()->random()->id;

        return $tab;
    }

    public function getIdsLevel2()
    {
        $tab = ['level_id' => null, 'country_id' => null, 'category_level_id' => null];
        $level = Level::where('level_id', '!=', null)->get()->random();
        $tab['level_id'] = $level->id;
        $tab['country_id'] = $level->country_id;
        $tab['category_level_id'] = LevelCategory::all()->random()->id;
        return $tab;
    }

    public function run(Faker $faker)
    {
        for ($i = 0; $i < 100; $i++) {

            $tab = $this->getIdsLevel1();

            DB::table('levels')->insert([
                'name' => $faker->country,
                'level_id' => $tab['level_id'],
                'country_id' => $tab['country_id'],
                'category_level_id' => $tab['category_level_id'],
                'web_site' => $faker->url,
                'email' => $faker->companyEmail,
                'number_phone' => $faker->phoneNumber,
                'address' => $faker->address,

            ]);

        }

        for ($i = 0; $i < 100; $i++) {

            $tab = $this->getIdsLevel2();

            DB::table('levels')->insert([
                'name' => $faker->country,
                'level_id' => $tab['level_id'],
                'country_id' => $tab['country_id'],
                'category_level_id' => $tab['category_level_id'],
                'web_site' => $faker->url,
                'email' => $faker->companyEmail,
                'number_phone' => $faker->phoneNumber,
                'address' => $faker->address,

            ]);

        }

    }

}
