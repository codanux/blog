<?php

namespace App\Http\Controllers\Api\Front\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => ['hatalı bilgiler']], Response::HTTP_UNAUTHORIZED);
        }

        $user = $request->user();
        $token = $user->createToken(env('APP_NAME'));
        return response()->json([
            'user' => new JsonResource($user),
            'token' => $token
        ], Response::HTTP_OK)->header('Authorization', $token->accessToken);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => true
        ], Response::HTTP_OK);
    }
}
