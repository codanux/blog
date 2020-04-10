<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


foreach(config('app.locales') as $locale) {

    Route::prefix($locale == config('app.default_locale') ? '': $locale)->name($locale.'.')->group(function() use($locale) {

        Route::get('/', 'HomeController@welcome')->name('welcome');

        Route::get(trans('routes.home', [], $locale), 'HomeController@index')->name('home');

        Route::get(trans('routes.post.index', [], $locale), 'PostController@index')->name('post.index');
        Route::get(trans('routes.post.show', [], $locale), 'PostController@show')->name('post.show');


        Route::get(trans('routes.category.index', [], $locale), 'CategoryController@index')->name('category.index');
        Route::get(trans('routes.category.show', [], $locale), 'CategoryController@show')->name('category.show');

        // Admin SPA
        Route::view('/admin', 'layouts.admin')->name('admin');
        Route::view('/admin/{any}', 'layouts.admin')->where('any', '.*');

        // Authentication Routes...
        Route::get(trans('routes.login', [], $locale), 'Auth\LoginController@showLoginForm')->name('login');
        Route::post(trans('routes.login', [], $locale), 'Auth\LoginController@login');
        Route::post(trans('routes.logout', [], $locale), 'Auth\LoginController@logout')->name('logout');

        Route::get(trans('routes.register', [], $locale), 'Auth\RegisterController@showRegistrationForm')->name('register');
        Route::post(trans('routes.register', [], $locale), 'Auth\RegisterController@register');

        Route::get(trans('routes.password.request', [], $locale), 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
        Route::post(trans('routes.password.email', [], $locale), 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        Route::get(trans('routes.password.reset', [], $locale), 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
        Route::post(trans('routes.password.update', [], $locale), 'Auth\ResetPasswordController@reset')->name('password.update');

        Route::get(trans('routes.password.confirm', [], $locale), 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
        Route::post(trans('routes.password.confirm', [], $locale), 'Auth\ConfirmPasswordController@confirm');

        Route::get(trans('routes.verification.notice', [], $locale), 'Auth\VerificationController@show')->name('verification.notice');
        Route::get(trans('routes.verification.verify', [], $locale), 'Auth\VerificationController@verify')->name('verification.verify');
        Route::post(trans('routes.verification.resend', [], $locale), 'Auth\VerificationController@resend')->name('verification.resend');
    });
}

