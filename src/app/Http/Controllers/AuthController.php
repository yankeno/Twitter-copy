<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', "email"],
            'password' => ['required'],
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'message' => 'Login Successful',
                'user' => Auth::user(),
            ], 200);
        }

        return response()->json(['message' => 'Login Failure'], 401);
    }

    public function me(Request $request)
    {
        return $request->user();
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'between:1,100', 'unique:users'],
            'famili_name' => ['required', 'betweet:1:50'],
            'given_name' => ['required', 'betweet:1:50'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'between:6,30', 'confirmed'],
            'avatar_url' => ['image'],
        ]);

        User::create([
            'name' => $request->name,
            'famili_name' => $request->familyName,
            'given_name' => $request->givenName,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'avatar_url' => '/storage/img/avatar/default.jpg',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(true);
    }
}
