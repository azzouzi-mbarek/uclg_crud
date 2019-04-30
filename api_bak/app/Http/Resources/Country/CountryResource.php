<?php

namespace App\Http\Resources\Country;

use App\Models\Country;
use App\Models\Level\Level;
use Illuminate\Http\Resources\Json\Resource;

class CountryResource extends Resource
{
    /**
     * Transform the resource into an array.
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
                'name' => $this->name,
                'iso_a3' => $this->iso_a3,
                'iso_a2' => $this->iso_a2,
                'iso_n3' => $this->iso_n3,
                'region' => $this->region->name,
                'description' => $this->description,
                'capital' => $this->capital,
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
                'devise' => $this->devise,
                'levels_count' => Level::where('country_id', $this->id)->where('level_id', null)->count(),
                'indicatif_tele' => $this->indicatif_tele,
                'drapeau_url' => $this->drapeau_url,
                'population' => $this->population,
                'population_year' => $this->population_year,
            ],
            'geometry' => $this->area,

            // 'levels_1' => count($this->levels->filter(function ($value, $key) {return $value->level_id == null;})),
            // 'href' => [
            //     'Levels 1' => route('levels.index', [$this->id, null]),
            // ],
            // 'leaderships' => [
            //     'link' => (function () {
            //         $region_id = $this->region_id;
            //         return route('country_persons', [$region_id, $this->id, null]);
            //     })()
            // ],
        ];
    }
}
