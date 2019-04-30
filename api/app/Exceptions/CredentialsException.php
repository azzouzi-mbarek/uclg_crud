<?php

namespace App\Exceptions;

use Exception;

class CredentialsException extends Exception
{
    public function report()
    {
        return response([
            'error' => 'Email or Password does\'t exist',

        ], Response::HTTP_NOT_FOUND);

    }
}
