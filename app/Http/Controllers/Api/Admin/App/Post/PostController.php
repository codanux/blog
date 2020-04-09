<?php

namespace App\Http\Controllers\Api\Admin\App\Post;

use App\Http\Controllers\Controller;
use App\Models\App\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $posts = (new Post())->newQuery()->paginate();

        return JsonResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return JsonResource
     */
    public function show(Post $post)
    {
        return new JsonResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Post $post
     * @return JsonResource
     */
    public function update(Request $request, Post $post)
    {
        $post->update([
            'name' => $request->get('name'),
            'slug' => $request->get('slug'),
            'locale' => $request->get('locale'),
        ]);

        return (new JsonResource($post))->additional([
            'notify' => [
                //'progress' => true,
                'type' => 'positive',
                'message' => $post->name. ' Güncellendi'
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
