<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup']]);
    }

    public function users($root)
    {
        return User::all();
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function login($root, array $args)
    {

        $credentials = ['email' => $args['email'], 'password' => $args['password']];

        if (!$token = auth()->attempt($credentials)) {

            throw_if(true, ModelNotFoundException::class, "Email ou mot de passe n'existe pas");

        } else {

            return $this->respondWithToken($token);

        }

    }

    public function signup($root, array $args)
    {

        $user = User::create($args);

        return $this->login($root, $args);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {

        return ['auth_token' => [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ],
            'error' => ''];

    }
    protected function respondWithError($error, $token)
    {

        return [
            'error' => [
                'message' => $error,
            ],
        ];

    }

}
