<?php

namespace App\Http\Controllers;

use App\Http\Requests\EvenementRequest;
use App\Http\Resources\Level\EvenementCollection;
use App\Http\Resources\Level\EvenementResource;
use App\Models\Level\Evenement;
use App\Models\Level\Level;
use App\Models\Level\Programme;
use Illuminate\Http\Request;

class EvenementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id,$country_id,Level $level)
    {
        return EvenementCollection::collection($level->Evenement);
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
    public function store($region,$country,Level $level,EvenementRequest $request)
    {
        $evenement = new Evenement($request->all());
        $level->Evenement()->save($evenement);
        return response([
            'data' => new EvenementResource($evenement)

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Evenement  $evenement
     * @return \Illuminate\Http\Response
     */
    public function show(Evenement $evenement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\Evenement  $evenement
     * @return \Illuminate\Http\Response
     */
    public function edit(Evenement $evenement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\Evenement  $evenement
     * @return \Illuminate\Http\Response
     */
    public function update($region,$country,$level, Evenement $evenement,Request $request)
    {
        $evenement->update($request->all());
        return response([
            'data' => new EvenementResource($evenement)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Evenement  $evenement
     * @return \Illuminate\Http\Response
     */
    public function destroy($region,$country,Level $level, Evenement $evenement)
    {
        $evenement->delete();
        return response(null, 204);
    }
}
