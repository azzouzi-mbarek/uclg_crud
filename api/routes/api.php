<?php

Route::group([

    'middleware' => 'api',

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ResetPasswordController@process');

//    Route::get('users', 'UserController@index') ;
    Route::apiResource('users', 'UserController');

    Route::apiResource('/regions', 'RegionController');
    Route::apiResource('/countries', 'CountryController');

    Route::group(['prefix' => 'countries'], function () {
        Route::apiResource('/{country}/levels', 'LevelController');
        Route::apiResource('/{country}/persons', 'PersonController');

        Route::group(['prefix' => '/{country}/levels'], function () {
            Route::apiResource('/{level}/population', 'PopulationController');
            Route::apiResource('/{level}/persons', 'PersonController');

        });

    });

    Route::apiResource('levelCategory', 'LevelCategoryController');
    Route::apiResource('persons', 'PersonController');
    Route::apiResource('academic_levels', 'AcademicLevelController');
    Route::apiResource('institutions', 'InstitutionController');
    Route::get('/search/{searchTerm}', 'SearchController@search');

});
