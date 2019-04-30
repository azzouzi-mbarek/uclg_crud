<?php

namespace App\Http\Controllers;

use App\Http\Resources\Country\CountryCollection;
use App\Http\Resources\Country\CountryResource;
use App\Models\Country;
use App\Models\Region;
use GeoJson\GeoJson;
use Grimzy\LaravelMysqlSpatial\Types\Geometry;
use Illuminate\Http\Request;
use Spinen\Geometry\Geometries as g;

class CountryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country)
    {

        $countries = Country::all();

        return CountryCollection::collection($countries);
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
    public function store(Request $request)
    {
        if ($request->single_shape) {
            $country = new Country();
            $country->name = $request->name;
            $country->iso_a3 = $request->iso_a3;
            $country->iso_a2 = $request->iso_a2;
            $country->iso_n3 = $request->iso_n3;
            $country->population = $request->pop_est;
            $country->population_year = $request->lastcensus;

            if ($request->hasFile('geojson')) {
                $file = $request->file('geojson');
                $fileContents = file_get_contents($file);
                $FilePhpObjectFormat = json_decode($fileContents);
                $feature = GeoJson::jsonUnserialize($FilePhpObjectFormat);
                $geometry = $feature->getGeometry();

                $country->geom = Geometry::fromJson(json_encode($geometry));

            }
            dd($country);
            $country->save();
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
                // cree region
                foreach ($features as $feature) {
                    $regions[$feature->getProperties()['subregion']][] = $feature;
                }
                foreach (array_keys($regions) as $regionName) {

                    $region = new Region();
                    $region->name = $regionName;

                    $region->save();
                }

                // save each feature
                foreach ($features as $value) {
                    // create new region
                    $country = new Country();
                    // get propreties from propreties geom
                    $country->name = $value->getProperties()['name'];
                    $country->iso_a3 = $value->getProperties()['iso_a3'];
                    $country->iso_a2 = $value->getProperties()['iso_a2'];
                    $country->iso_n3 = $value->getProperties()['iso_n3'];
                    $country->population = $value->getProperties()['pop_est'];
                    $country->population_year = $value->getProperties()['lastcensus'];

                    $country->region_id = Region::where('name', $value->getProperties()['subregion'])->first()->id;
                    //get geometry in Object PHP format
                    $geometry = $value->getGeometry();
                    // create Geometry from json

                    $country->area = Geometry::fromJson(json_encode($geometry));

                    // dd($country->area instanceof Polygon);
                    $country->save();
                }
            }
        }
        return response(
            [
                // 'data' => new CountryResource($country),

            ],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return CountryResource
     */
    public function show($country)
    {
        $country = Country::where('id', $country)->first();

        return new CountryResource($country);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function edit(Country $country)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Region $region, Country $country)
    {
        $country->update($request->all());
        return response([
            'data' => new CountryResource($country),

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(Region $region, Country $country)
    {
        $country->delete();
        return response(null, 204);
    }
}
