<?php

namespace App\Http\Resources\Level;

use Illuminate\Http\Resources\Json\JsonResource;

class LegalFrameworkCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
