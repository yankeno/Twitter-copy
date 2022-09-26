<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TweetControllerUpdateTweetTest extends TestCase
{
    /**
     * /tweet/update のバリデーションテスト
     *
     * @return void
     */
    public function testControllerUpdateTweetValidation(array $keys, array $values, string $message)
    {
        $dataList = array_combine($keys, $values);
        $response = $this->withHeaders([
            'Content-Type' => 'application/json',
        ])->putJson('/api/tweet/update', [
            $dataList,
        ]);

        $response->assertStatus(200)->assertJsonFragment(
            ['message' => $message]
        );
    }

    public function validDataProvider()
    {
        return [
            // ツイート更新正常データ
            [
                ['tweetId', 'tweet', 'likes', 'retweets', 'replies'],
                [1, '正常データ']
            ]
        ]
    }
}
