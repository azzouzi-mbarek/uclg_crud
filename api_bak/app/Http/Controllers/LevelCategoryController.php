<?php

namespace App\Http\Controllers;

use App\Http\Resources\Level\LevelCategoryCollection;
use App\Http\Resources\Level\LevelCategoryResource;
use App\Models\LevelCategory;
use Illuminate\Http\Request;

class LevelCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = LevelCategory::all();

        return LevelCategoryCollection::collection($categories);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    public function show($categoryLevel)
    {
        $category = LevelCategory::find($categoryLevel)->first();

        return new LevelCategoryResource($category);
    }

    public function edit(CategoryLevel $categoryLevel)
    {
        //
    }

    public function update(Request $request, CategoryLevel $categoryLevel)
    {
        //
    }

    public function destroy(CategoryLevel $categoryLevel)
    {
        //
    }
}
