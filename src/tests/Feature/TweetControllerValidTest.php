<?php

namespace Tests\Unit\Requests;

use Tests\TestCase;

class TweetControllerValidTest extends TestCase
{
    /**
     * @dataProvider validDataProvider
     * @param $userId
     * @param $tweet
     */
    public function testValidateValidTweet(int $userId, string $tweet)
    {
        $response = $this->withHeaders([
            'Content-Type' => 'application/json',
        ])->postJson('/api/tweet/create', [
            'userId' => $userId,
            'tweet' => $tweet,
        ]);

        $response->assertStatus(200)->assertJsonFragment(
            ['message' => 'successfull']
        );
    }

    public function validDataProvider()
    {
        return [
            // 正常データ
            [
                'userId' => 8,
                'tweet' => 'hello',
            ],
            // tweet 140文字
            [
                'userId' => 8,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ',
            ],
        ];
    }
}
