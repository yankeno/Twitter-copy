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
            // $request->session()->regenerate();
            return response()->json([
                'message' => 'Login Successful',
                'user' => Auth::user(),
            ], 200);
        }

        return response()->json(['message' => 'Lopgin Failure'], 401);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'between:1,10', 'unique:users'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'between:6,30', 'confirmed'],
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
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
