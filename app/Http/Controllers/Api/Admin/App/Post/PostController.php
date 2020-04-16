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
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $posts = (new Post())->newQuery()
            ->where('name', 'like', '%'.$request->get('filter').'%')
            ->paginate($request->rowsPerPage);
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
        $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'body' => 'required|min:3',
            'locale' => 'required'
        ]);

        $post->update([
            'name' => $request->get('name'),
            'slug' => $request->get('slug'),
            'body' => $request->get('body'),
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
     * @return JsonResource
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return new JsonResource($post);
    }
}
