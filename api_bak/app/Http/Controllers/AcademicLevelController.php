<?php

namespace App\Http\Controllers;

use App\Http\Resources\Person\AcademicLevelCollection;
use App\Http\Resources\Person\AcademicLevelResource;
use App\Models\Person\AcademicLevel;
use App\Http\Requests\AcademicLevelRequest;
use Illuminate\Http\Request;

class AcademicLevelController extends Controller
{
    public function index()
    {
        $academicLevels = AcademicLevel::all();

        return AcademicLevelCollection::collection($academicLevels);

    }

    public function show($id)
    {
        $academicLevel = AcademicLevel::find($id);

        return new AcademicLevelResource($academicLevel);

    }
    public function store(AcademicLevelRequest $request)
    {
        $academicLevel = new AcademicLevel($request->all());;
        $academicLevel->save();
        return response([
            'data' => new AcademicLevelResource($academicLevel)
        ], 201);
    }
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\academicLevel $academicLevel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AcademicLevel $academicLevel)
    {
        $academicLevel->update($request->all());
        return response([
            'data' => new AcademicLevelResource($academicLevel)
        ], 201);
    }

    public function destroy($id)
    {
        $academicLevel = AcademicLevel::find($id);
        $academicLevel->delete();
        return response(
            [
                'data' => new AcademicLevelResource($academicLevel),
                'message' => 'deleted',

            ],
            201
        );

    }

}
