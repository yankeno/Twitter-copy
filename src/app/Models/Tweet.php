<?php

namespace App\Models;

use Exception;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tweet extends Model
{
    use HasFactory;

    protected $table = 'tweets';
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function index()
    {
        try {
            $tweets = DB::table('tweets')
                ->join('users', 'tweets.user_id', 'users.id')
                ->select('tweets.*', 'users.account', 'users.name', 'users.authorized')
                ->whereNull('tweets.deleted_at',)
                ->get();
            return response()->json([
                'message' => 'successfull',
                'tweets' => $tweets,
            ]);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ]);
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make(
                $request->all(),
                [
                    'userId' => 'required|numeric',
                    'tweet' => 'required|string|min:1|max:140',
                ]
            );
            if ($validator->fails()) {
                Log::error($validator->errors(), [
                    'request' => $request->all(),
                ]);
                return response()->json([
                    'message' => 'failed'
                ]);
            }
            DB::beginTransaction();
            $this->tweet = $request->tweet;
            $this->user_id = $request->userId;
            $this->user_agent = $request->header('User-Agent');
            $this->save();
            $response = response()->json([
                'message' => 'successfull'
            ]);
            DB::commit();
            return $response;
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ]);
        }
    }

    public function remove(Request $request)
    {
        try {
            $validator = Validator::make(
                $request->all(),
                [
                    'tweetId' => 'required|numeric',
                ]
            );
            if ($validator->fails()) {
                Log::error($validator->errors(), [
                    'request' => $request->all(),
                ]);
                return response()->json([
                    'message' => 'failed'
                ]);
            }
            DB::beginTransaction();
            $this->where('id', $request->tweetId)
                ->update(['deleted_at' => Carbon::now()]);
            $response = response()->json([
                'message' => 'successfull'
            ]);
            DB::commit();
            return $response;
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ]);
        }
    }

    public function edit(Request $request)
    {
        try {
            // tweet は編集後の tweet内容で受け取り、その他は数値で受け取って受け取った値で更新
            $validator = Validator::make(
                $request->all(),
                [
                    'tweetId' => 'required|numeric',
                    'tweet' => 'required_without_all:likes,retweets,replies|prohibits:likes,retweets,replies|string|min:1|max:140',
                    'likes' => 'required_without_all:tweet,retweets,replies|prohibits:tweet,retweets,replies|numeric|min:0',
                    'retweets' => 'required_without_all:tweet,likes,replies|prohibits:tweet,likes,replies|numeric|min:0',
                    'replies' => 'required_without_all:tweet,likes,retweets|prohibits:tweet,likes,retweets|numeric|min:0',
                ]
            );
            if ($validator->fails()) {
                Log::error($validator->errors(), [
                    'request' => $request->all(),
                ]);
                return response()->json([
                    'message' => 'failed'
                ]);
            }
            DB::beginTransaction();
            if (isset($request->tweet)) {
                $this->tweet = $request->tweet;
                $this->where('id', $request->tweetId)->update(['tweet' => $request->tweet]);
            }
            if (isset($request->likes)) {
                $this->likes = $request->likes;
                $this->where('id', $request->tweetId)->update(['likes' => $request->likes]);
            }
            if (isset($request->retweets)) {
                $this->retweets = $request->retweets;
                $this->where('id', $request->tweetId)->update(['retweets' => $request->retweets]);
            }
            if (isset($request->replies)) {
                $this->replies = $request->replies;
                $this->where('id', $request->tweetId)->update(['replies' => $request->replies]);
            }
            $response = response()->json([
                'message' => 'successfull'
            ]);
            DB::commit();
            return $response;
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ]);
        }
    }
}
