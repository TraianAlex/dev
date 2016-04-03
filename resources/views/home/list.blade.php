@extends('layouts.app')

@section('styles')
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
@endsection

@section('content')
	
<div ng-app="groceryListApp" ng-controller="HomeController">
    
    <nav-list></nav-list>
    
    <!--div class="container" ng-controller="GroceryListItemsController"-->
    <div class="container" ng-view>
        
    </div>
</div>

@endsection