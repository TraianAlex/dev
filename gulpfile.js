var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.styles(['style.css']);
    mix.scripts(['vendor/jquery-2.1.4.min.js', 'bootstrap-3.3.6.min.js',
    	'angular.min.js', 'angular-route.min.js',
    	'app/lib/underscore.min.js', 'app/js/app1.js']);
    mix.version(['css/all.css', 'css/app.css', 'js/all.js']);
});
