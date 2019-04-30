<?php

namespace App\Http\Controllers;

use App\Http\Requests\PersonRequest;
use App\Http\Resources\Person\PersonCollection;
use App\Http\Resources\Person\PersonResource;
use App\Models\Country;
use App\Models\Level\Level;
use App\Models\Person\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country = null, Level $level = null)
    {

        if ($level != null) {
            return PersonCollection::collection($level->Persons);
        }
        if ($level == null & $country != null) {
            return PersonCollection::collection($country->Persons);
        } else {
            return Person::all();
        }

//        $level=Level::find(1);
        //        dd($level->Persons);
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
    public function store($country, Level $level, PersonRequest $request)
    {
        $person = new Person($request->all());
        $person->save();
        if ($person->save()) {
            //        $level->Persons()->save($person);
            $level->Persons()->attach($person->id, ['category_person_id' => $request->category_person_id]);
        }
        return response([
            'data' => new PersonResource($person),
//            'level' => $level->Persons(),
            'person' => $person,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Person\Person $person
     * @return \Illuminate\Http\Response
     */
    public function show($country_id, $level_id, $id)
    {
        $person = Person::find($id);
//        dd($person->Levels);
        return new PersonResource($person);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Person\Person $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Person\Person $person
     * @return \Illuminate\Http\Response
     */
    public function update($region, $country, Level $level, Person $person, Request $request)
    {
        $person->update($request->all());
        if ($person->update()) {
            //        $level->Persons()->save($person);
            $level->Persons()->updateExistingPivot($person->id, ['category_person_id' => $request->category_person_id]);
        }
        return response([
            'data' => new PersonResource($person),

        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person\Person $person
     * @return \Illuminate\Http\Response
     */
    public function destroy($region, $country, Level $level, Person $person)
    {
        $person->delete();
        return response(null, 204);
    }
}
