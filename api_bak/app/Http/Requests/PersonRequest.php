<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
                {
                    return [];
                }
            case 'POST':
                {
                    return [

                        'first_name' =>'required|max:255',
                        'last_name' =>'required|max:255',
                    ];
                }
            case 'PUT':
            case 'PATCH':
                {
                    return [
                        'first_name' =>'required|max:255',
                        'last_name' =>'required|max:255',

                    ];
                }
            default:
                break;
        }


    }
}
