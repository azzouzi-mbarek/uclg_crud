<?php

namespace App\Http\Controllers;

use App\Http\Requests\LegalFrameworkRequest;
use App\Http\Resources\Level\LegalFrameworkCollection;
use App\Http\Resources\Level\LegalFrameworkResource;
use App\Models\Level\LegalFramework;
use App\Models\Level\Level;
use Illuminate\Http\Request;

class LegalFrameworkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id,$country_id,Level $level)
    {
        return LegalFrameworkCollection::collection($level->LegalFramework);
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
    public function store($region,$country,Level $level,LegalFrameworkRequest $request)
    {
        $legalFramework = new LegalFramework($request->all());
        $level->LegalFramework()->save($legalFramework);
        return response([
            'data' => new LegalFrameworkResource($legalFramework)

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\LegalFramework  $legalFramework
     * @return \Illuminate\Http\Response
     */
    public function show(LegalFramework $legalFramework)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\LegalFramework  $legalFramework
     * @return \Illuminate\Http\Response
     */
    public function edit(LegalFramework $legalFramework)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\LegalFramework  $legalFramework
     * @return \Illuminate\Http\Response
     */
    public function update($region,$country,$level,LegalFramework $legalFramework,Request $request )
    {
        $legalFramework->update($request->all());
        return response([
            'data' => new LegalFrameworkResource($legalFramework)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\LegalFramework  $legalFramework
     * @return \Illuminate\Http\Response
     */
    public function destroy($region,$country,Level $level, LegalFramework $legalFramework)
    {
        $legalFramework->delete();
        return response(null, 204);
    }
}
