<?php

namespace App\Models;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Tweet extends Model
{
    protected $table = 'tweets';
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public static function rules()
    {
        return [
            'userId' => 'required|numeric',
            'tweet' => 'required|string|min:1|max:140',
        ];
    }

    public function index()
    {
        try {
            $tweets = DB::table('tweets')
                ->join('users', 'tweets.user_id', 'users.id')
                ->select('tweets.*', 'users.account', 'users.name', 'users.authorized')
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

    public function delete()
    {
    }
}
