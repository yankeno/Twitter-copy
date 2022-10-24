<?php

namespace Tests\Unit\Requests;

use Tests\TestCase;
use App\Models\User;

class TweetControllerInvalidTest extends TestCase
{
    /**
     * @dataProvider invalidDataProvider
     * @param $userId
     * @param $tweet
     */
    public function testInvalidateInvalidTweet(int $userId, string $tweet)
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
            ['message' => 'failed']
        );
    }

    public function invalidDataProvider()
    {
        return [
            // tweet 0文字
            [
                'userId' => 1,
                'tweet' => '',
            ],
            // tweet 141文字
            [
                'userId' => 1,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK',
            ],
        ];
    }
}
