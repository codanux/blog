@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach($posts as $post)
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><a href="{{ routeLocalized('post.show', $post) }}">{{ $post->name }}</a></div>

                    <div class="card-body">
                        {{ $post }}
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
