<?php

namespace App\Http\Controllers;

use App\Http\Resources\Region\RegionCollection;
use App\Http\Resources\Region\RegionResource;
use App\Models\Region;
use GeoJson\GeoJson;
use Grimzy\LaravelMysqlSpatial\Types\Geometry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RegionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $regions = Region::with('countries')->get();

        return RegionCollection::collection($regions);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // test if file in request from Frontend
        if ($request->hasFile('geojson')) {
            // get file from request
            $file = $request->file('geojson');
            // get content from file
            // file format type STRING  "{ \n "type" :"Feature" ,\n  "name"... }
            $fileContents = file_get_contents($file);
            // decode it to PHP Object format "{type: "Feature", name: "mauritanie",…}"
            $FilePhpObjectFormat = json_decode($fileContents);

            // Parse to file to GeoJson format
            $features = GeoJson::jsonUnserialize($FilePhpObjectFormat);
            // dd($features);
            // save each feature
            foreach ($features as $value) {
                // create new region
                $region = new Region();
                // get name from propreties
                $region->name = $value->getProperties()['name'];
                //get geometry in Object PHP format
                $geometry = $value->getGeometry();
                // create Geometry from json

                $region->area = Geometry::fromJson(json_encode($geometry));

                $region->save();
            }
        }

        return response(
            [
                // 'data' => new RegionResource($region),

            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Region $region
     *
     * @return \Illuminate\Http\Response
     */
    public function show($region)
    {

        return new RegionResource($region);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\region $region
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($region)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\region       $region
     *
     * @return \Illuminate\Http\Response
     */
    public function update($request, region $region)
    {
        return response(
            [
                'data' => new RegionResource($region),
            ],
            201
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\region $region
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($region)
    {
        $region->delete();

        return response(null, 204);
    }
}
