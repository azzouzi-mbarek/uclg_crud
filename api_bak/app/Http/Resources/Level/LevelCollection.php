<?php

namespace App\Http\Resources\Level;

use App\Models\Level\Level;
use App\Models\Person\LevelPerson;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [

            'type' => 'Feature',
            'properties' => [
                'id' => $this->id,
                'name' => $this->name,
                'country_id' => $this->country_id,
                'level_id' => $this->level_id,
                'category' => $this->category_level->name,
                'email'=>$this->email,
                'number_phone'=>$this->number_phone,
                'stage' => $this->stage,
                'st' => $this->levels->count(),
                'population' => $this->population,
                // 'population_year' => 2005,
                'date_population' => $this->census_date_population,
                'levels_count' => Level::where('level_id', $this->id)->count(),

                'partie_genre_male' => Level::find($this->id)->Persons->where('sex', 'male')->count(),
                'partie_genre_female' => Level::find($this->id)->Persons->where('sex', 'female')->count(),

                'N_of_person_elu' => LevelPerson::where('level_id', $this->id)->where('status', 'élu')->count(),
                'N_of_person_nomme' => LevelPerson::where('level_id', $this->id)->where('status', 'nommé')->count(),

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

                'N_des_Elus_locaux' => Level::find($this->id)->Persons->count(),
                'N_de_partenaires' => Level::find($this->id)->Institutions->count(),
                'N_des_conseillers_communaux' => LevelPerson::where('function', 'like', '%conseil')->count(),
            ],
            'geometry' => $this->shape,

            // 'detail_level' => [
            //     'link' => (function () {

            //         return route('levels.show', [$this->country_id, $this->id]);

            //     })(),
            // ],
        ];
    }
}
