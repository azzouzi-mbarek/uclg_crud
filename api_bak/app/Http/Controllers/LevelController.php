<?php

namespace App\Http\Controllers;

use App\Http\Resources\Level\LevelCollection;
use App\Http\Resources\Level\LevelResource;
use App\Models\Country;
use App\Models\Level\Level;
use GeoJson\GeoJson;
use Grimzy\LaravelMysqlSpatial\Types\Geometry;
use Illuminate\Http\Request;

class LevelController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($country_id = null, Request $request)
    {

        $level_id = $request->id;

        // return level only level one
        if ($level_id === null) {
            $country = Country::find($country_id);
            $levels = $country->levels()->where('level_id', $level_id)->get();

        } else {
            $level = Level::find($level_id);
            $levels = $level->levels()->where('level_id', $level_id)->get();

        }

        return LevelCollection::collection($levels);

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
    public function store($country_id = null, Request $request)
    {

        $categoryLevelId = $request->level_category;
        $stage = (int) $request->level_stage;

        if (isset($request->single_shape)) {
            dd('not single');
        } else {
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

                if ($stage > 1) {

                    foreach ($features as $feature) {
                        if ($stage == 2) {

                            $level1_name = $feature->getProperties()['ADM1'];

                        } elseif ($stage == 3) {

                            $level1_name = $feature->getProperties()['ADM2'];

                        }

                        // $level1_name = $feature->getProperties()['ADM1'];
                        $country_id = $request->country_id;
                        $level1_id = Level::where('name', $level1_name)->where('country_id', $country_id)->first()->id;
                        $level2 = new Level();

                        if ($stage === 2) {
                            $level2->name = $feature->getProperties()['ADM2'];
                        }
                        if ($stage === 3) {

                            $level2->name = $feature->getProperties()['ADM3'];
                        }
                        $level2->level_id = $level1_id;
                        $level2->country_id = $country_id;
                        $level2->stage = $request->level_stage;
                        $level2->category_level_id = $categoryLevelId;
                        $geometry = $feature->getGeometry();
                        $level2->shape = Geometry::fromJson(json_encode($geometry));

                        $level2->save();
                    }

                } else {

                    foreach ($features as $feature) {
                        $level1 = new Level();
                        $level1->name = $feature->getProperties()['ADM1'];
                        $level1->country_id = $country_id;
                        $level1->stage = $request->level_stage;
                        $level1->category_level_id = $categoryLevelId;

                        $geometry = $feature->getGeometry();
                        $level1->shape = Geometry::fromJson(json_encode($geometry));
                        $level1->save();
                    }
                }

            }
        }

        return response(
            [
                //   'data' => new CountryResource($country),
                "msg" => 'Levels added successfully',
            ],
            201
        );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function show($country_id, $level_id)
    {

        $level = Level::where('id', $level_id)->first();

        return new LevelResource($level);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Level $level)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Level\Level  $level
     * @return \Illuminate\Http\Response
     */
    public function destroy(Level $level)
    {
        //
    }
}
