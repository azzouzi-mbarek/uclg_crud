<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    protected $fillable =[
        "name"
    ];
    public  function  Level(){
        return $this->belongsTo(Level::class);
    }
}
