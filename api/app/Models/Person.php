<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = [
        "first_name",
        "last_name",
        "image_url",
        "profession",
        'birthday',
        'nationality',
        'sex',
        'study_area',
        'short_biography',
        'email',
        'number_phone',
        'academic_level_id',
    ];
    protected $table = 'persons';

    public function AcademicLevel()
    {
        return $this->belongsTo(AcademicLevel::class);
    }

}
