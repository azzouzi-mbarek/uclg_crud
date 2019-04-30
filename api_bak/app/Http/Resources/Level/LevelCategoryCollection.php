<?php

namespace App\Http\Resources\Level;

use Illuminate\Http\Resources\Json\JsonResource;

class LevelCategoryCollection extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'link' => [
                'link' => (function () {

                    return route('levelCategory.show', [$this->id]);

                })(),
            ],
        ];

    }
}
