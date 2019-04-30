<?php

namespace App\Http\Controllers;

use App\Http\Requests\FinanceRequest;
use App\Http\Resources\Level\FinanceCollection;
use App\Http\Resources\Level\FinanceResource;
use App\Models\Level\Finance;
use App\Models\Level\Level;
use Illuminate\Http\Request;

class FinanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id,$country_id,Level $level)
    {
        return FinanceCollection::collection($level->Finance);
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
    public function store($region,$country,Level $level,FinanceRequest $request)
    {
        $finance = new Finance($request->all());
        $level->Finance()->save($finance);
        return response([
            'data' => new FinanceResource($finance)

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Finance  $finance
     * @return \Illuminate\Http\Response
     */
    public function show(Finance $finance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\Finance  $finance
     * @return \Illuminate\Http\Response
     */
    public function edit(Finance $finance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\Finance  $finance
     * @return \Illuminate\Http\Response
     */
    public function update($region,$country,$level, Finance $finance,Request $request)
    {
        $finance->update($request->all());
        return response([
            'data' => new FinanceResource($finance)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Finance  $finance
     * @return \Illuminate\Http\Response
     */
    public function destroy($region,$country,Level $level, Finance $finance)
    {
        $finance->delete();
        return response(null, 204);
    }
}
