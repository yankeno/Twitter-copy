<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TweetController extends Controller
{
    public function Index(Request $request)
    {
        return Tweet::all();
    }

    public function Create(Request $request)
    {
        $tweet = new Tweet();
        $validator = Validator::make($request->all(), $tweet->rules());

        if ($validator->fails()) {
            Log::error($validator->errors(), [
                'request' => $request->all(),
            ]);
            return response()->json([
                'mesasge' => 'failed'
            ]);
        }

        return response()->json([[
            'message' => 'successfull'
        ]]);
    }
}
