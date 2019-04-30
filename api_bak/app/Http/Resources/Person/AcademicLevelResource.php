<?php

namespace App\Http\Resources\Person;

use Illuminate\Http\Resources\Json\JsonResource;

class AcademicLevelResource extends JsonResource
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
            'bac_level' => $this->bac_level,

        ];
    }
}
