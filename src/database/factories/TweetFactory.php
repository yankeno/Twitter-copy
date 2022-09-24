<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tweet>
 */
class TweetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => rand(1, 50),
            'tweet' => $this->faker->realText(140),
            'likes' => $this->faker->randomNumber(),
            'retweets' => $this->faker->randomNumber(),
            'replies' => $this->faker->randomNumber(),
            'user_agent' => $this->faker->userAgent(),
        ];
    }
}
