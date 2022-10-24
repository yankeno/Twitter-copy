<?php

namespace Tests\Unit\Requests;

use Tests\TestCase;
use App\Models\User;

class TweetControllerValidTest extends TestCase
{
    /**
     * @dataProvider validDataProvider
     * @param $userId
     * @param $tweet
     */
    public function testValidateValidTweet(int $userId, string $tweet)
    {
        $user = User::factory()->create();

        /** @var \Illuminate\Contracts\Auth\Authenticatable $user */
        $response = $this->actingAs($user)->withHeaders([
            'Content-Type' => 'application/json',
        ])->postJson('/api/tweet/create', [
            'userId' => $userId,
            'tweet' => $tweet,
        ]);

        $response->assertStatus(200)->assertJsonFragment(
            ['message' => 'successful']
        );
    }

    public function validDataProvider()
    {
        return [
            // 正常データ
            [
                'userId' => 1,
                'tweet' => 'hello',
            ],
            // tweet 140文字
            [
                'userId' => 1,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ',
            ],
        ];
    }
}
