<?php

namespace App\Models;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function rules()
    {
        return [
            'userId' => 'required|numeric',
            'tweet' => 'required|string|min:1|max:140',
        ];
    }

    public function store(Request $request)
    {
        $this->tweet = $request->tweet;
        $this->user_id = $request->userId;
        $this->user_agent = $request->header('User-Agent');
        $this->save();
        return response()->json([[
            'message' => 'successfull'
        ]]);
    }
}
