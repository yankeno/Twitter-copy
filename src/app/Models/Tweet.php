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
            $this->where('id', $request->input('tweetId'))
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
}
