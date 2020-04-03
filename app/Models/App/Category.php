<?php

namespace App\Models\App;

use App\Traits\TranslationTrait;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use TranslationTrait;

    protected $guarded = [];

    protected $appends = [
        'redirect'
    ];

    public function getRedirectAttribute()
    {
        return 'category.index';
    }


    public function categoryable()
    {
        return $this->morphTo();
    }

    public function posts()
    {
        return $this->morphedByMany(Post::class, 'categoryable');
    }

}
