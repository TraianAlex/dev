<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Dev</title>

    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
    @yield('styles')
    <link href="{{ elixir('css/all.css') }}" rel="stylesheet">
    <!--link href="{{asset('app/css/style.css')}}" rel="stylesheet"-->
    <style>
        body {font-family: 'Lato';}
        .fa-btn {margin-right: 6px;}
    </style>
    <!--[if it IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63781170-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)};
      gtag('js', new Date());
      gtag('config', 'UA-63781170-2');
    </script>
</head>
<body id="app-layout">
    @include('partials.navigation')

    @yield('content')

    <!-- JavaScripts -->
    <!--script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="{{ asset('assets/js/angular.min.js') }}"></script>
    <script src="{{ asset('assets/js/angular-route.min.js') }}"></script>
    <script src="{{asset('app/lib/underscore.min.js')}}"></script>
    <script src="{{ asset('app/js/app1.js') }}"></script-->
    <script src="{{ elixir('js/all.js') }}"></script>
</body>
</html>