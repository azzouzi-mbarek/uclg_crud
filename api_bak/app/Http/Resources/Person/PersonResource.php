<?php

namespace App\Http\Resources\Person;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Person\LevelPerson;


class PersonResource extends JsonResource
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
            'image' => $this->image_url,
            'sex' => $this->sex,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'birthday' => $this->birthday,
            'nationality' => $this->nationality,
            // 'academic_level' => $this->academic_level->name,
            'study_area' => $this->study_area,
            'email' => $this->email,
            'short_biography'=>$this->short_biography,
            'number_phone' => $this->number_phone,
//                [
//                function () {
//                    foreach ($this->Levels as $level) {
//                        return $level;
//                     }
//                }
//
//            ]

        ];
    }
}
