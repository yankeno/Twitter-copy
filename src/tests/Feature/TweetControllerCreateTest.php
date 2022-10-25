<?php

namespace Tests\Unit\Requests;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TweetControllerCreateTest extends TestCase
{
    /**
     * php artisan migrate:fresh を実行してから
     */
    use RefreshDatabase;

    /**
     * デフォルトの seeder をテストの前に実行する場合に true を設定
     * -> これを true にしていないと RfreshDatabase により
     *    users が空っぽになるので、外部キー制約によりテストを通らなくなる
     */
    protected $seed = true;

    /**
     * @dataProvider dataProvider
     * @param $userId
     * @param $tweet
     * @param $message
     */
    public function testInvalidateInvalidTweet(int $userId, string $tweet, string $message)
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
            ['message' => $message]
        );
    }

    public function dataProvider()
    {
        return [
            // 正常データ
            [
                'userId' => 1,
                'tweet' => 'hello',
                'message' => 'successful',
            ],
            [
                'userId' => 1,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ',
                'message' => 'successful',
            ],

            // 異常データ
            [
                'userId' => 1,
                'tweet' => '',
                'message' => 'failed',
            ],
            [
                'userId' => 1,
                'tweet' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK',
                'message' => 'failed',
            ],
        ];
    }
}
