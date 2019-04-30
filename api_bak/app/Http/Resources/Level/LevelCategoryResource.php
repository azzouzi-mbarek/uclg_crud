<?php

namespace App\Http\Resources\Level;

use Illuminate\Http\Resources\Json\JsonResource;

class LevelCategoryResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,

        ];

    }
}
