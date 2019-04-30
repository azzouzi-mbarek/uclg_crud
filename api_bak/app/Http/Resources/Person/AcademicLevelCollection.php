<?php

namespace App\Http\Resources\Person;

use App\Models\Person\Person;
use Illuminate\Http\Resources\Json\JsonResource;

class AcademicLevelCollection extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'bac_level' => $this->bac_level,
        ];
    }
}
