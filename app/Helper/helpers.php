<?php

use Illuminate\Support\Facades\Route;

if (! function_exists('routeLocalized')) {
    function routeLocalized($name, $parameters = [], $absolute = true, $locale = null)
    {
        if (is_null($locale)){
            $locale = app()->getLocale();
        }

        return app('url')->route($locale . '.' . $name, $parameters, $absolute);
    }
}

if (! function_exists('generateLink')) {
    function generateLink($lang = null, $translations = [])
    {
        $routeName = Route::currentRouteName();
        $parameters = [];

        foreach($translations as $key => $trans)
        {
            if ($item = $trans->where('locale', $lang)->first())
            {
                $parameters = array_merge($parameters, [$key => $item]);
            }
            else {
                return routeLocalized($trans->first()->redirect, $parameters, true, $lang);
            }
        }

        return routeLocalized(substr($routeName, strpos($routeName, '.') + 1), $parameters, true, $lang);
    }
}
