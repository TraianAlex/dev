<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => 'getList']);
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index(User $user)
    {
        return view('home.home', compact('user'));
    }

    public function getList()
    {
        return view('home.list');
        //return view('layouts.list');
    }
}
