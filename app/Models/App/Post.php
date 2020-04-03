<?php

namespace App\Models\App;

use App\Traits\TranslationTrait;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use TranslationTrait;

    protected $guarded = [];

    protected $appends = [
        'redirect'
    ];

    public function getRedirectAttribute()
    {
        return 'post.index';
    }
}
