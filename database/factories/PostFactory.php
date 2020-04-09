<?php

/** @var Factory $factory */

use App\Models\App\Post;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'slug' => Str::slug($faker->name),
        'body' => $faker->text,
        'locale' => $faker->boolean ? 'tr' : 'en',
    ];
});
