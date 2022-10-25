<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TweetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("/login", [AuthController::class, "login"]);
Route::post("/logout", [AuthController::class, "logout"]);
Route::post("/register", [AuthController::class, "register"]);
Route::get('/me', [AuthController::class, "me"])->middleware('auth:sanctum');

Route::group([
    'prefix' => 'tweet',
    "middleware" => ["auth:sanctum"],
], function () {
    Route::get('/', [TweetController::class, 'index']);
    Route::post('/create', [TweetController::class, 'create']);
    Route::put('/update', [TweetController::class, 'update']);
    Route::delete('/destroy', [TweetController::class, 'destroy']);
});
