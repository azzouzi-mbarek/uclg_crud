<?php

namespace App\Http\Controllers;

use App\Http\Resources\Level\LevelCollection;
use App\Http\Resources\Person\PersonCollection;
use App\Models\Level\Level;
use App\Models\Person\Person;

class SearchController extends Controller
{

    public function search($searchTerm)
    {

        $results['levels'] = $this->searchInLevelTable($searchTerm);
        $results['persons'] = $this->searchInPersonTable($searchTerm);

        return response(
            [
                'data' => $results,
            ],
            201
        );

    }

    public function searchInLevelTable($searchText)
    {
        $searchText = strtolower($searchText);

        $levels = Level::with('category_level', 'Persons')->where(function ($query) use ($searchText) {

            $columns = ['name', 'web_site', 'email', 'number_phone', 'address'];

            foreach ($columns as $column) {
                $query->orWhere($column, 'LIKE', '%' . $searchText . '%');

            }

            $query->orWhereHas('category_level', function ($q) use ($searchText) {
                $q->where(function ($q) use ($searchText) {
                    $q->where('name', 'LIKE', '%' . $searchText . '%');
                    // $q->orWhere('company_name', 'LIKE', '%' . $searchText . '%');
                });
            });

            $query->orWhereHas('Persons', function ($q) use ($searchText) {
                $q->where(function ($q) use ($searchText) {
                    $q->where('first_name', 'LIKE', '%' . $searchText . '%');
                    $q->orWhere('last_name', 'LIKE', '%' . $searchText . '%');
                });
            });

        })->get();
        return LevelCollection::collection($levels);
    }

    public function searchInPersonTable($searchText)
    {
        $searchText = strtolower($searchText);

        $levels = Person::with('academic_level')->where(function ($query) use ($searchText) {

            $columns = ['first_name', 'last_name', 'email', 'number_phone'];

            foreach ($columns as $column) {
                $query->orWhere($column, 'LIKE', '%' . $searchText . '%');

            }

            $query->orWhereHas('academic_level', function ($q) use ($searchText) {
                $q->where(function ($q) use ($searchText) {
                    $q->where('name', 'LIKE', '%' . $searchText . '%');
                    // $q->orWhere('company_name', 'LIKE', '%' . $searchText . '%');
                });
            });

        })->get();
        return PersonCollection::collection($levels);
    }

}
