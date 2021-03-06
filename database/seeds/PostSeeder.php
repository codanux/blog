<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\App\Post::class, 50)->create()->each(function ($post) {
            $post->categories()->attach(\App\Models\App\Category::first());
        });
    }
}
