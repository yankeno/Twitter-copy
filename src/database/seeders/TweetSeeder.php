<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tweets')->insert([
            [
                'user_id' => 1,
                'tweet' => 'やあ',
                'user_agent' => 'パソコン',
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ],
            [
                'user_id' => 2,
                'tweet' => 'はろー',
                'user_agent' => 'スマホ',
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ],
            [
                'user_id' => 3,
                'tweet' => 'ぼんじゅーる',
                'user_agent' => 'ガラケー',
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ],
        ]);
    }
}
