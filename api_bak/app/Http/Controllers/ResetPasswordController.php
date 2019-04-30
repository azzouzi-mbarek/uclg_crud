<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class ResetPasswordController extends Controller
{

    public function sendEmail(ResetPasswordRequest $request)
    {


        $email = $request->email;

        if ($this->validateEmail($email)) {
            $this->send($email);
            return $this->successResponse();
        } else {
            return $this->failedResponse();
        }
    }

    public function send($email)
    {
        $token = $this->createToken($email);

        Mail::to($email)->send(new ResetPasswordMail($token));
        return $this->successResponse();
    }

    public function validateEmail($email)
    {

        return !!(new \App\Models\User)->where('email', $email)->first();

    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email', $email)->first();

        if ($oldToken) {

            return $oldToken->token;

        }
        $token = str_random(60);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email)
    {

        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

    }

    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email does\'t  found on our database'
        ], Response::HTTP_NOT_FOUND);
    }

    public function successResponse()
    {
        return response()->json([
            'data' => 'Reset Email is send successfully ,Please check yout Email'
        ], Response::HTTP_OK);
    }


    public function process(ChangePasswordRequest $request)
    {
        return $this->getPasswordResetTableRow($request)->count() > 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request)
    {
        return DB::table('password_resets')->where(['email' => $request->email, 'token' => $request->resetToken]);
    }


    private function tokenNotFoundResponse()
    {
        return response()->json(
            [
                'error' => 'Token or Email is incorrect'
            ],
            Response::HTTP_UNPROCESSABLE_ENTITY
        );
    }


    private function changePassword($request)
    {
        $user = User::whereEmail($request->email)->first();
        $user->update(['password' => $request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data' => 'Password Successfully Changed'], Response::HTTP_CREATED);
    }


}
