<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TweetController extends Controller
{
    public function index()
    {
        return Tweet::all();
    }

    public function create(Request $request)
    {
        $tweet = new Tweet();
        $validator = Validator::make(
            $request->all(),
            $tweet->rules()
        );
        if ($validator->fails()) {
            Log::error($validator->errors(), [
                'request' => $request->all(),
            ]);
            return response()->json([
                'message' => 'failed'
            ]);
        }
        return $tweet->store($request);
    }
}
