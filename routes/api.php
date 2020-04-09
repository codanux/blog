<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'Front\Auth\UserController@login');
Route::post('register', 'Front\Auth\UserController@register');

Route::middleware('auth:api')->group(function (){
    Route::post('logout', 'Front\Auth\UserController@logout');
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::apiResource('post', 'Admin\App\Post\PostController')->parameters([
    'post' => 'post:id'
]);;
