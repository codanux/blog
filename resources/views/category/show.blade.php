@extends('layouts.app', ['translations' => ['category' => $category->translations]])

@section('content')
<div class="container">
    <div class="row justify-content-center mb-4">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ $category->name }}</div>

                <div class="card-body">
                    Category slug = {{ $category->slug }}
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        @foreach($category->posts as $post)
            <div class="col-md-8 mb-2">
                <div class="card">
                    <div class="card-header"><a href="{{ routeLocalized('post.show', $post) }}">{{ $post->name }} (post)</a></div>

                    <div class="card-body">
                        {{ $post }}
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
