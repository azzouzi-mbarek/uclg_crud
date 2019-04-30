<?php

namespace App\Http\Resources\Country;

use App\Models\Country;
use App\Models\Level\Level;
use App\Models\Person\CountryPerson;
use Illuminate\Http\Resources\Json\Resource;

class CountryCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'type' => 'Feature',
            'properties' => [
                'id' => $this->id,
                'last_stage' => (function () {
                    $LastStage = 0;
                    $levels = Level::where('country_id', $this->id)->get();
                    foreach ($levels as $value) {
                        if ($value->stage > $LastStage) {
                            $LastStage = $value->stage;
                        }

                    }
                    return $LastStage;
                })(),

                'name' => $this->name,
                'iso_a3' => $this->iso_a3,
                'region' => $this->region->name,
                'population' => $this->population,
                'population_year' => $this->population_year,
                'levels_count' => Level::where('country_id', $this->id)->where('level_id', null)->count(),
                'partie_genre_male' => Country::find($this->id)->Persons->where('sex', 'male')->count(),
                'partie_genre_female' => Country::find($this->id)->Persons->where('sex', 'female')->count(),
                'N_of_person_elu' => CountryPerson::where('country_id', $this->id)->where('status', 'élu')->count(),
                'N_of_person_nomme' => CountryPerson::where('country_id', $this->id)->where('status', 'nommé')->count(),
                'N_academic' => [
                    'sans_bac' => $this->Persons->where('academic_level', 'bac+0')->count(),
                    'bac_1' => $this->Persons->where('academic_level', 'bac+1')->count(),
                    'bac_2' => $this->Persons->where('academic_level', 'bac+2')->count(),
                    'bac_3' => $this->Persons->where('academic_level', 'bac+3')->count(),
                    'bac_4' => $this->Persons->where('academic_level', 'bac+4')->count(),
                    'bac_5' => $this->Persons->where('academic_level', 'bac+5')->count(),
                    'bac_6' => $this->Persons->where('academic_level', 'bac+6')->count(),
                    'bac_7' => $this->Persons->where('academic_level', 'bac+7')->count(),
                    'bac_8' => $this->Persons->where('academic_level', 'bac+8')->count(),
                ],
                'N_de_Ministres' => CountryPerson::all()->where('country_id', $this->id)->where('function', 'Ministre')->count(),
            ],
            'geometry' => $this->area,

            // 'levels_1' => count($this->levels->filter(function ($value, $key) {
            //     return $value->level_id == null;
            // })),
            // 'levels' => $this->levels,

            // 'href' => [
            //     'link' => route('countries.show', [$this->id]),
            // ],
        ];
    }
}
