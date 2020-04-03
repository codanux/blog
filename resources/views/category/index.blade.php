@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @foreach($categories as $category)
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><a href="{{ routeLocalized('category.show', $category) }}">{{ $category->name }}</a></div>

                    <div class="card-body">
                        {{ $category }}
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
