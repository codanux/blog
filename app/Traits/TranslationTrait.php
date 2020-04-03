<?php

namespace App\Traits;

trait TranslationTrait {

    public static function bootTranslationTrait()
    {
        self::created(function ($model) {
            if (is_null($model->translation_of)){
                $model->update([
                    'translation_of' => $model->id
                ]);
            }
        });
    }

    public function translations()
    {
        return $this->hasMany(self::class, 'translation_of', 'translation_of');
    }

    public function scopeLocale($query, $locale = null)
    {
        if(!is_null($locale))
        {
            return $query->where('locale', $locale);
        }
    }

    public function scopeNotLocale($query, $locale = null)
    {
        if(!is_null($locale))
        {
            return $query->where('locale', '!=', $locale);
        }
    }
}
