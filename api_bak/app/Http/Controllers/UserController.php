<?php

namespace App\Http\Controllers;


use App\Http\Resources\user\UserResource;
use App\Http\Resources\user\UsersCollection;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {
        $users = User::all();

        return UsersCollection::collection($users);
    }


    public function show(User $user)
    {

        return new UserResource($user);
    }
}
