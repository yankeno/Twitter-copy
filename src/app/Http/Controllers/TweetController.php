<?php

namespace App\Http\Controllers;

use Exception;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use App\Models\Tweet;
use Illuminate\Http\JsonResponse;

class TweetController extends Controller
{
    public function index(): JsonResponse
    {
        try {
            $tweets = Tweet::with(['user:id,account,name,authorized,avatar_url'])
                ->whereNull('deleted_at')
                ->latest('created_at')
                ->paginate(20);
            return response()->json([
                'message' => 'successful',
                'tweets' => $tweets,
            ], 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }

    public function create(Request $request): JsonResponse
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
                ], 400);
            }
            DB::beginTransaction();
            $created = Tweet::create([
                'tweet' => $request->tweet,
                'user_id' => $request->userId,
                'user_agent' => $request->header('User-Agent'),
            ]);
            DB::commit();
            // ツイートの state 更新に使用するので追加したツイートの内容を返却する
            return response()->json([
                'message' => 'successful',
                'tweet' => Tweet::find($created->id),
            ], 201);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }

    public function update(Request $request): JsonResponse
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
                    'message' => 'failed',
                ], 400);
            }
            DB::beginTransaction();
            if (isset($request->tweet)) {
                Tweet::where('id', $request->tweetId)->update(['tweet' => $request->tweet]);
            }
            if (isset($request->likes)) {
                Tweet::where('id', $request->tweetId)->update(['likes' => $request->likes]);
            }
            if (isset($request->retweets)) {
                Tweet::where('id', $request->tweetId)->update(['retweets' => $request->retweets]);
            }
            if (isset($request->replies)) {
                Tweet::where('id', $request->tweetId)->update(['replies' => $request->replies]);
            }
            DB::commit();
            return response()->json([
                'message' => 'successful',
                'tweet' => Tweet::find($request->tweetId),
            ], 201);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }

    public function destroy(Request $request): JsonResponse
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
                ], 400);
            }
            DB::beginTransaction();
            $count = Tweet::where('id', $request->tweetId)
                ->update(['deleted_at' => Carbon::now()]);
            DB::commit();
            return response()->json([
                'message' => 'successful',
                'count' => $count,
            ], 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }
}
