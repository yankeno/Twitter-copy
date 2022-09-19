<?php

namespace Tests\Unit\Requests;

use Tests\TestCase;

class TweetControllerInvalidTest extends TestCase
{
    /**
     * @dataProvider invalidDataProvider
     * @param $userId
     * @param $tweet
     */
    public function testInvalidateInvalidTweet(int $userId, string $tweet)
    {
        $response = $this->withHeaders([
            'Content-Type' => 'application/json',
        ])->postJson('/api/tweet/create', [
            'userId' => $userId,
            'tweet' => $tweet,
        ]);

        $response->assertStatus(200)->assertJsonFragment(
            ['message' => 'failed']
        );
    }

    public function invalidDataProvider()
    {
        return [
            // tweet 0文字
            [
                'userId' => 9,
                'tweet' => '',
            ],
            // tweet 141文字
            [
                'userId' => 9,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK',
            ],
        ];
    }
}
