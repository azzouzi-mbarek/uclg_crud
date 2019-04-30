<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Validator;

class InstitutionController extends Controller
{

    public function update($root, array $args)
    {
        // return [
        //     'id' => $args['id'],
        //     'name' => $args['name'],
        // ];

        $validator = Validator::make($args, [
            'name' => [
                'required',
                Rule::unique('institution_categories')->ignore($args['id']),
            ],

        ]);

        if ($validator->fails()) {
            foreach ($validator->messages()->getMessages() as $field_name => $messages) {
                return [
                    'id' => $args['id'],
                    'name' => $messages,
                ];
            }

        }
        // if ($validator->fails()) {
        //     return [
        //         'id' => $args['id'],
        //         'name' => $validator->name,
        //     ];
        // }

        // Validator::make($args, [
        //     'name' => [
        //         'required',
        //         Rule::unique('institution_categories')->ignore($args['id']),
        //     ],
        // ]);
    }
}
