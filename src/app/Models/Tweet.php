<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $guarded = ['id'];

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

    public function store()
    {
    }
}
