@extends('layouts.app', ['translations' => ['post' => $post->translations]])

@section('content')
<div class="container">
    <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $post->name }}</div>

                    <div class="card-body">
                        {{ $post }}
                    </div>
                </div>
            </div>
    </div>
</div>
@endsection
