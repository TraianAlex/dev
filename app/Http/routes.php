<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
| Route::resource() -> resource() Laravel 5.2
| manual copied from 5.1 in illuminate\fundation\helpers.php line 736
*/

Route::group(['middleware' => 'web'], function () {

    Route::auth();

    resource('api', 'ApiController');

    Route::get('/home', 'HomeController@index');
    Route::get('/list', 'HomeController@getList');

    Route::get('/', function () {
	    return view('welcome');
	});
});