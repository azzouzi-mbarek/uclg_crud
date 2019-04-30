<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndicatorRequest;
use App\Http\Resources\Indicator\IndicatorCollection;
use App\Http\Resources\Indicator\IndicatorResource;
use App\Models\Indicator\Indicator;
use App\Models\Level\Level;
use Illuminate\Http\Request;

class IndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id, $country_id, Level $level)
    {

        return IndicatorCollection::collection($level->Indicators);

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
    public function store($region, $country, Level $level, IndicatorRequest $request)
    {
        $indicator = new Indicator($request->all());
        $indicator->save();
        if ($indicator->save()) {
            $level->Indicators()->attach($indicator->id,['note'=>$request->note]);
        }
        return response([
            'data' => new IndicatorResource($indicator),
            'person' => $indicator
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Indicator\Indicator  $indicator
     * @return \Illuminate\Http\Response
     */
    public function show($region_id, $country_id, $level_id, $id)
    {

        $indicator = Indicator::find($id);
        return new IndicatorResource($indicator);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Indicator\Indicator  $indicator
     * @return \Illuminate\Http\Response
     */
    public function edit(Indicator $indicator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Indicator\Indicator  $indicator
     * @return \Illuminate\Http\Response
     */
    public function update($region, $country, Level $level, Indicator $indicator, Request $request)
    {
        $indicator->update($request->all());
        if ($indicator->update()) {
            $level->Indicators()->updateExistingPivot($indicator->id,['note'=>$request->note]);
        }
        return response([
            'data' => new IndicatorResource($indicator)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Indicator\Indicator  $indicator
     * @return \Illuminate\Http\Response
     */
    public function destroy($region, $country, Level $level, Indicator $indicator)
    {
        $indicator->delete();
        return response(null, 204);
    }
}
