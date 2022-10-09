<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{
    public function getHorrorMovies(Request $request)
    {
        
      $response = Http::get(env('HORROR_MOVIES'));
      return  json_decode($response->body());

    }

    public function getActionMovies ()
    {
        $response = Http::get(env('ACTION_MOVIES'));
        return  json_decode($response->body());
    }

    public function getAllMovies ()
    {
        $response = Http::get(env('HORROR_MOVIES'));
            $movies = json_decode($response->body());
            $response = Http::get(env('ACTION_MOVIES'));
        
            $movies = array_merge($movies,json_decode($response->body()));
            return  $movies;
    }
}
