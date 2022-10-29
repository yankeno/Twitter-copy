<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required',
                ]
            );

            if ($validator->fails()) {
                Log::error($validator->errors(), [
                    'request' => $request->all(),
                ]);
                return response()->json([
                    'message' => 'failed'
                ], 400);
            }

            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return response()->json([
                    'message' => 'Login Successful',
                    'user' => Auth::user(),
                ], 200);
            }

            return response()->json(['message' => 'Login Failure'], 401);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        return response()->json([
            'message' => 'successful'
        ], 200);
    }

    public function register(Request $request): JsonResponse
    {
        try {
            $mesasges = [];
            $validator = Validator::make(
                $request->all(),
                [
                    'account' => 'required|between:1,50|unique:users,account',
                    'name' => 'required|between:1,100',
                    'familyName' => 'required|between:1,50',
                    'givenName' => 'required|between:1,50',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required|between:6,30',
                ]
            );

            if ($validator->fails()) {
                Log::error($validator->errors(), [
                    'request' => $request->all(),
                ]);
                return response()->json([
                    'message' => $validator->errors(),
                ], 400);
            }

            DB::beginTransaction();
            User::create([
                'account' => $request->account,
                'name' => $request->name,
                'family_name' => $request->familyName,
                'given_name' => $request->givenName,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'avatar_url' => '/storage/img/avatar/default.jpg', // デフォルトアバター
            ]);
            DB::commit();

            return response()->json([
                'message' => 'successful'
            ], 201);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'message' => 'failed'
            ], 400);
        }
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json([
            'message' => 'successful',
            'user' => $request->user(),
        ], 200);
    }
}
