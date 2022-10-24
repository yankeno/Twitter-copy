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
    public function testControllerUpdateTweetValidation(array $keys, array $values, string $message)
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

        $response->assertStatus(200)->assertJsonFragment(
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
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'likes'],
                [2, 9999],
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'retweets'],
                [3, 9999999],
                'successful'
            ],
            // 正常
            [
                ['tweetId', 'replies'],
                [4, 0],
                'successful'
            ],
            // tweetId なし
            [
                ['tweet'],
                ['異常データ'],
                'failed'
            ],
            // tweetIdのみ
            [
                ['tweetId'],
                [6],
                'failed'
            ],
            // tweet, likes 設定
            [
                ['tweetId', 'tweet', 'likes'],
                [7, '正常データ', 1000],
                'failed'
            ],
            // likes, retweets 設定
            [
                ['tweetId', 'likes', 'retweets'],
                [8, 2, 3],
                'failed'
            ],
            // retweets, replies 設定
            [
                ['tweetId', 'likes', 'retweets'],
                [9, 909090, 12],
                'failed'
            ],
            // tweet, retweets 設定
            [
                ['tweetId', 'tweet', 'retweets'],
                [10, '異常データ', 900009],
                'failed'
            ],
        ];
    }
}
