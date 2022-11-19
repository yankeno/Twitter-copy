<?php

namespace App\Tweet;

use App\Models\Tweet;
use Illuminate\Support\Facades\Validator;

class SearchTweets
{
    public function search(string $searchWord)
    {
        $validator = Validator::make([$searchWord], ['required|max:30']);
        if ($validator->fails()) {
            return [];
        }
        $words = $this->separateSearchWords($searchWord);
        $query = Tweet::query();
        foreach ($words as $word) {
            $query->where('tweet', 'like', '%' . addcslashes($word, '%_\\') . '%');
        }
        return $query->with(['user:id,account,name,authorized,avatar_url'])->get();
    }

    public function separateSearchWords(string $string): array
    {
        $replacedWord = str_replace('　', ' ', $string);
        return explode(' ', $replacedWord);
    }
}
