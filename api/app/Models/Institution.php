<?php

namespace App\Models;

use App\Models\InstitutionCategory;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{

    // use spatialTrait;

    // protected $spatialFields = ['localisation'];

    protected $fillable = [
        'name',
        'acronym',
        'description',
        'foundation_year',
        'country_seat',
        'organe_tutelle',
        'areas_intervention',
        'target_beneficiary',
        'phone',
        'web_site',
        'email',
        'address',
        'localisation',
        'institution_category_id',
    ];

    public function category()
    {
        return $this->belongsTo(InstitutionCategory::class, 'institution_category_id');
    }

}
