<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('account', 50)->unique();
            $table->string('name', 127);
            $table->string('family_name', 127);
            $table->string('given_name', 127);
            $table->string('email', 255)->unique();
            $table->dateTime('email_verified_at')->nullable();
            $table->boolean('authorized');
            $table->string('avatar_url');
            $table->string('password');
            $table->rememberToken();
            $table->dateTime('created_at')->nullable();
            $table->dateTime('updated_at')->nullable();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tweets');
        Schema::dropIfExists('users');
    }
};
