<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommunicationToolRequest;
use App\Http\Resources\Level\CommunicationToolCollection;
use App\Http\Resources\Level\CommunicationToolResource;
use App\Models\Level\CommunicationTool;
use App\Models\Level\Level;
use Illuminate\Http\Request;

class CommunicationToolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($region_id,$country_id,Level $level)
    {
        return CommunicationToolCollection::collection($level->CommunicationTool);

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
    public function store($region,$country,Level $level,CommunicationToolRequest $request)
    {
        $communicationTool = new CommunicationTool($request->all());
        $level->CommunicationTool()->save($communicationTool);
        return response([
            'data' => new CommunicationToolResource($communicationTool)

        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\CommunicationTool  $communicationTool
     * @return \Illuminate\Http\Response
     */
    public function show(CommunicationTool $communicationTool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Level\CommunicationTool  $communicationTool
     * @return \Illuminate\Http\Response
     */
    public function edit(CommunicationTool $communicationTool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\CommunicationTool  $communicationTool
     * @return \Illuminate\Http\Response
     */
    public function update($region,$country,$level,CommunicationTool $communicationTool,Request $request )
    {
        $communicationTool->update($request->all());
        return response([
            'data' => new CommunicationToolResource($communicationTool)

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\CommunicationTool  $communicationTool
     * @return \Illuminate\Http\Response
     */
    public function destroy($region,$country,Level $level, CommunicationTool $communicationTool)
    {
        $communicationTool->delete();
        return response(null, 204);
    }
}
