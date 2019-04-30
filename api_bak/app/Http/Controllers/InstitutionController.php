<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstitutionRequest;
use App\Http\Resources\Institution\InstitutionCollection;
use App\Http\Resources\Institution\InstitutionResource;
use App\Models\Institution\Institution;
use App\Models\Level\Level;
use Illuminate\Http\Request;

class InstitutionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id, $country_id, Level $level)
    {

        return InstitutionCollection::collection($level->Institutions);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store($region, $country, Level $level, InstitutionRequest $request)
    {
        $institution = new Institution($request->all());
        $institution->save();
        if ($institution->save()) {
            //        $level->Persons()->save($person);
            $level->Institutions()->attach($institution->id, ['category_level_institution_id' => $request->category_level_institution_id]);
        }
        return response([
            'data' => new InstitutionResource($institution),
//            'level' => $level->Persons(),
            'person' => $institution
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Institution\Institution $institution
     * @return \Illuminate\Http\Response
     */
    public function show($region_id, $country_id, $level_id, $id)
    {

        $institution = Institution::find($id);
        return new InstitutionResource($institution);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Institution\Institution $institution
     * @return \Illuminate\Http\Response
     */
    public function edit(Institution $institution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Institution\Institution $institution
     * @return \Illuminate\Http\Response
     */
    public function update($region, $country, Level $level, Institution $institution, Request $request)
    {
        $institution->update($request->all());
        if ($institution->update()) {
            $level->Institutions()->updateExistingPivot($institution->id, ['category_level_institution_id' => $request->category_level_institution_id]);
        }
        return response([
            'data' => new InstitutionResource($institution)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Institution\Institution $institution
     * @return \Illuminate\Http\Response
     */
    public function destroy($region, $country, Level $level, Institution $institution)
    {
        $institution->delete();
        return response(null, 204);
    }
}
