![Laravel](https://github.com/codanux/blog/workflows/Laravel/badge.svg)
## How Multilanguage Router
## config/app.php (Application Locale Configuration)
    'locale' => 'en',

    'default_locale' => 'tr',

    'locales' => array ('en', 'tr', 'fr'),
## web.php
```
foreach(config('app.locales') as $locale) {

    Route::prefix($locale == config('app.default_locale') ? '': $locale)->name($locale.'.')->group(function() use($locale) {

        Route::get(trans('routes.home', [], $locale), 'HomeController@index')->name('home');
    });
}
```
## helper
```
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

```
## resources/lang/{language}/routes.php
```
{language = tr}
return [
    'home' => 'anasayfa'
];
{language = en}
return [
    'home' => 'dashboard'
];
```
## route() -> routeLocalized()
```
    routeLocalized('home');
    // app->setLocale('tr'); 'site.com/anasayfa'
    // app->setLocale('en'); 'site.com/en/dashboard'
   
```
## License

The Laravel framework is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
