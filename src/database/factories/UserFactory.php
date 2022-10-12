<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'account' => $this->faker->unique()->userName(),
            'name' => $this->faker->name(),
            'family_name' => $this->faker->lastName(),
            'given_name' => $this->faker->firstName(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'authorized' => rand(0, 1),
            'avatar_url' => 'img/avatar/generated_photos_5e6887c46d3b380006f1daa1.jpeg',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
