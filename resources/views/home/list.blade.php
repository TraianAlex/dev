@extends('layouts.app')

@section('content')
	
<div ng-app="groceryListApp" ng-controller="HomeController">
    
    <nav-list></nav-list>
    
    <!--div class="container" ng-controller="GroceryListItemsController"-->
    <div class="container" ng-view>
        
    </div>
</div>

@endsection