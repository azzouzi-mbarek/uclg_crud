<?php

namespace App\Http\GraphQL\Mutations;

use App\Models\InstitutionCategory;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class InstitutionMutator
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     *
     * @return mixed
     */




     public function rules()
{
    return [
      
        'name' => ['numeric'],
    ];
}
    public function update($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {

        $request = Request::create('jwt/token', 'POST', $args, [], [], [
            'HTTP_Accept' => 'application/json',
        ]);

        $request->validate([
            'name' => [
                'required',
                'numeric',
                Rule::unique('institution_categories')->ignore($args['id']),
            ],
        ]);
        $c = InstitutionCategory::find($request->id);
        $c->name = $request->name;
        $c->save();

        $id = $c->id;
        $name = $c->name;

        return compact('id', 'name');
    }
}
