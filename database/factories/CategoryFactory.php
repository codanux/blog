<?php

/** @var Factory $factory */

use App\Models\App\Category;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'slug' => Str::slug($faker->name),
        'locale' => $faker->boolean ? 'tr' : 'en',
    ];
});
