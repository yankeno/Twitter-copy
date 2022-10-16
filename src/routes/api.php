<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\Auth\LoginController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['prefix' => 'auth'], function () {
//     Route::post("/login", [AuthController::class, 'login']);
// });

// Route::group([
//     'middleware' => 'auth:api',
//     'prefix' => 'auth'
// ], function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::post('/refresh', [AuthController::class, 'refresh']);
//     Route::post('/me', [AuthController::class, 'me']);
// });

Route::post("/login", [LoginController::class, "login"]);
Route::post("/logout", [LoginController::class, "logout"]);
Route::post("/register", [LoginController::class, "register"]);

Route::group([
    'prefix' => 'tweet',
    "middleware" => ["auth:sanctum"],
], function () {
    Route::get('/', [TweetController::class, 'index']);
    Route::post('/create', [TweetController::class, 'create']);
    Route::put('/update', [TweetController::class, 'update']);
    Route::delete('/destroy', [TweetController::class, 'destroy']);
});
