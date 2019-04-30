<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicLevel extends Model
{
    protected $table = 'academic_levels';

    
    protected $fillable = [
        "name",
        "bac_level",
    ];
    
    public  function  Persons(){
        return $this->hasMany(Person::class);
    }
}
