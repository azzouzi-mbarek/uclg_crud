<?php

namespace App\Http\Resources\Institution;

use Illuminate\Http\Resources\Json\JsonResource;

class InstitutionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'acronym' => $this->acronym,
            'description' => $this->description,
            'foundation_year' => $this->foundation_year,
            'country_seat' => $this->country_seat,
            'areas_intervention' => $this->areas_intervention,
            'target_beneficiary' => $this->target_beneficiary,
            'web_site' => $this->web_site,
            'email' => $this->email,
            'number_phone' => $this->number_phone,
            'address' => $this->address,
            'levels'=>$this->Levels,
            'levels' => function () {
                foreach ($this->Levels as $level) {
                    return $level->id;
                }
            }
//            'leaderships' => [
//                'link' => (function () {
//
//                    $region_id = Country::find($this->country_id)->region->id;
//                    return route('persons.index', [$region_id, $this->country_id, $this->id]);
//                })()
//            ],

        ];
    }
}
