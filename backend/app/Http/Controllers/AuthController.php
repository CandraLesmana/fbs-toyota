<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->only('email', 'password');

        if ($token = JWTAuth::attempt($credentials)) {

            $user = JWTAuth::user();

            return response()->json([
                'success' => true,
                'message' => "Login Success",
                'token' => $token,
                'token_type' => 'bearer',
                'user' => $user
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => "Login Failed",
        ], 422);
    }

    public function register(Request $request){
        $user = User::create($request->all());
        $credentials = $request->only('email', 'password');
        
        if ($token = JWTAuth::attempt($credentials)) {

            $user = JWTAuth::user();

            return response()->json([
                'success' => true,
                'message' => "Register Success",
                'token' => $token,
                'token_type' => 'bearer',
                'user' => $user
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => "Register Failed",
        ], 422);
    }

    public function me(){
        $user = JWTAuth::user();

        return response()->json([
            'success' => true,
            'data' => $user
        ], 200);
    }

    public function logout(){
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
    
            return response()->json([
                'success' => true,
                'message' => 'Logout Success'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'succes' => false,
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
