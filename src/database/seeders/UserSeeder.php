<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(100)->create();
        // DB::table('users')->insert([
        //     [
        //         'account' => 'test_tarou1',
        //         'name' => 'test',
        //         'family_name' => 'test1',
        //         'given_name' => 'tarou1',
        //         'email' => 'test@test.com',
        //         'email_verified_at' => now(),
        //         'authorized' => 0,
        //         'avatar_url' => 'http://placekitten.com/g/200/200',
        //         'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        //         'remember_token' => Str::random(10),
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //         'deleted_at' => null,
        //     ],
        //     [
        //         'account' => 'test_tarou2',
        //         'name' => 'test2',
        //         'family_name' => 'test2',
        //         'given_name' => 'tarou2',
        //         'email' => 'test2@test.com',
        //         'email_verified_at' => now(),
        //         'authorized' => 1,
        //         'avatar_url' => 'http://placekitten.com/g/200/200',
        //         'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        //         'remember_token' => Str::random(10),
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //         'deleted_at' => null,
        //     ],
        //     [
        //         'account' => 'test_tarou3',
        //         'name' => 'test3',
        //         'family_name' => 'test3',
        //         'given_name' => 'tarou3',
        //         'email' => 'test3@test.com',
        //         'email_verified_at' => now(),
        //         'authorized' => 0,
        //         'avatar_url' => 'http://placekitten.com/g/200/200',
        //         'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        //         'remember_token' => Str::random(10),
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //         'deleted_at' => null,
        //     ],
        // ]);
    }
}
