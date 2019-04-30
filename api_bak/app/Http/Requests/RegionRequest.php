<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegionRequest extends FormRequest
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
     *ll
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
                        'image' => 'required|image|mimes:jpeg,pngjpg,gif',
                        'name' => 'required|max:255|unique:regions',
                    ];
                }
            case 'PUT':
            case 'PATCH':
                {
                    return [
                        'name' => 'required|max:255|unique:regions',
                    ];
                }
            default:
                break;
        }


    }
}
