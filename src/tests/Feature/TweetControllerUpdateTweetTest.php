<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;

class TweetControllerUpdateTweetTest extends TestCase
{
    use RefreshDatabase;

    /**
     * /tweet/update のバリデーションテスト
     * @dataProvider dataProvider
     * @return void
     */
    public function testControllerUpdateTweetValidation(array $keys, array $values, int $status, string $message)
    {
        $dataList = array_combine($keys, $values);

        $user = User::factory()->create();

        /** @var \Illuminate\Contracts\Auth\Authenticatable $user */
        $response = $this->actingAs($user)
            ->withHeaders([
                'Content-Type' => 'application/json',
            ])->putJson(
                '/api/tweet/update',
                $dataList,
            );

        $response->assertStatus($status)->assertJsonFragment(
            ['message' => $message]
        );
    }

    public function dataProvider()
    {
        return [
            // 正常
            [
                ['tweetId', 'tweet'],
                [1, '正常データ'],
                200,
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'likes'],
                [2, 9999],
                200,
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'retweets'],
                [3, 9999999],
                200,
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'replies'],
                [4, 0],
                200,
                'successful'
            ],
            // tweetId なし
            [
                ['tweet'],
                ['異常データ'],
                400,
                'failed'
            ],
            // tweetIdのみ
            [
                ['tweetId'],
                [6],
                400,
                'failed'
            ],
            // tweet, likes 設定
            [
                ['tweetId', 'tweet', 'likes'],
                [7, '異常データ', 1000],
                400,
                'failed'
            ],
            // likes, retweets 設定
            [
                ['tweetId', 'likes', 'retweets'],
                [8, 2, 3],
                400,
                'failed'
            ],
            // retweets, replies 設定
            [
                ['tweetId', 'likes', 'retweets'],
                [9, 909090, 12],
                400,
                'failed'
            ],
            // tweet, retweets 設定
            [
                ['tweetId', 'tweet', 'retweets'],
                [10, '異常データ', 900009],
                400,
                'failed'
            ],
        ];
    }
}
