<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    public function __construct()
    {
        $this->tweet = new Tweet();
    }

    public function index()
    {
        return $this->tweet->index();
    }

    public function create(Request $request)
    {
        return $this->tweet->store($request);
    }

    public function edit(Request $request)
    {
        return $this-tweet->
    }

    public function destroy(Request $request)
    {
        return $this->tweet->remove($request);
    }
}
