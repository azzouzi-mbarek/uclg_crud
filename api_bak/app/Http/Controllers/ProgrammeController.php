<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProgrammeRequest;
use App\Http\Resources\Level\ProgrammeCollection;
use App\Http\Resources\Level\ProgrammeResource;
use App\Models\Level\Level;
use App\Models\Level\Programme;
use Illuminate\Http\Request;

class ProgrammeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id, $country_id, Level $level)
    {
        return ProgrammeCollection::collection($level->Programme);
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
    public function store($region,$country,Level $level,ProgrammeRequest $request)
    {
        $programme = new Programme($request->all());
        $level->Programme()->save($programme);
        return response([
            'data' => new ProgrammeResource($programme)

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Programme $programme
     * @return \Illuminate\Http\Response
     */
    public function show(Programme $programme)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\Programme $programme
     * @return \Illuminate\Http\Response
     */
    public function edit(Programme $programme)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Level\Programme $programme
     * @return \Illuminate\Http\Response
     */
    public function update($region,$country,$level, Programme $programme,Request $request)
    {
        $programme->update($request->all());
        return response([
            'data' => new ProgrammeResource($programme)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Programme $programme
     * @return \Illuminate\Http\Response
     */
    public function destroy($region,$country,Level $level, Programme $programme)
    {
        $programme->delete();
        return response(null, 204);
    }
}
