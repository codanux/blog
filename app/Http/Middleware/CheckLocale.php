<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class CheckLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (in_array($request->segment(1), config('app.locales'))) {
            $this->change( Request::segment(1));
        }
        else if (\session('locale') && ! in_array($request->segment(1), config('app.locales'))) {
            $this->change(config('app.default_locale'));
        }

        return $next($request);
    }


    private function change($locale){
        Session::put('locale', $locale);
        app()->setLocale($locale);
    }
}
