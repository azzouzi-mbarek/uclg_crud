<?php

namespace App\Http\Controllers;

use App\Http\Requests\PopulationRequest;
use App\Http\Resources\Level\PopulationCollection;
use App\Http\Resources\Level\PopulationResource;
use App\Models\Level\Level;
use App\Models\Level\Population;
use Illuminate\Http\Request;

class PopulationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($country_id, Level $level)
    {
        return PopulationCollection::collection($level->Population);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($region, $country, Level $level, PopulationRequest $request)
    {
        $population = new Population($request->all());
        $level->Population()->save($population);
        return response([
            'data' => new PopulationResource($population),

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function show(Population $population)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function edit(Population $population)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function update($region, $country, $level, Population $population, Request $request)
    {
        $population->update($request->all());
        return response([
            'data' => new PopulationResource($population),

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function destroy($region, $country, Level $level, Population $population)
    {
        $population->delete();
        return response(null, 204);
    }
}
