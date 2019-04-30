<?php

namespace App\Http\Resources\Institution;

use App\Models\Country;
use App\Models\Institution\CategoryInstitution;
use App\Models\Level\CategoryLevelInstitution;
use App\Models\Level\InstitutionLevel;
use App\Models\Level\Level;
use Illuminate\Http\Resources\Json\JsonResource;

class InstitutionCollection extends JsonResource
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
            'id'=>$this->id,
            'name'=> $this->name,
            'type'=> CategoryInstitution::find($this->category_institution_id)->name,
            'category_partenariat'=> CategoryLevelInstitution::find($this->pivot->category_level_institution_id)->name,
            'level_id' => $this->pivot->level_id,
            'country_id' => Level::find($this->pivot->level_id)->country->id,
            'region_id' => Country::find(Level::find($this->pivot->level_id)->country_id)->region_id,
            'profile_institution' => [
                'link' => (function () {
                    $level_id = $this->pivot->level_id;
                    $country_id = Level::find($this->pivot->level_id)->country->id;
                    $region_id = Country::find(Level::find($this->pivot->level_id)->country_id)->region_id;
                    return route('institutions.show', [$region_id, $country_id, $level_id, $this->id]);
                })()
            ],

        ];
    }
}
