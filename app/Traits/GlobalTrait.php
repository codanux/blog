<?php

namespace App\Http\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait GlobalTrait {

    public static function bootGlobalTrait()
    {
        self::created(function ($model) {
            if (is_null($model->translation_of)){
                $model->update([
                    'translation_of' => $model->id
                ]);
            }
        });
    }

    public function scopeLocale($query, $locale = null)
    {
        if(!is_null($locale))
        {
            return $query->where('locale', $locale);
        }
    }
}
