<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\User_profile;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;


class AuthenticateController extends Controller
{
    public function loginUser(Request $request)
    {
         $request->validate([
            'email' =>  'required|email',
            'password' => 'required|string|min:8'
        ]);

       if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('user_token')->plainTextToken;
            return response()->json([
                'user' => $user->load('profile'),
                'token' => $token
            ], 200);
       }

    }

    //register method
   public function registerUser(Request $request)
{

    $validated = $request->validate([
        'name'     => 'required|string|max:255',
        'email'    => 'required|email|unique:users,email',
        'password' => 'required|string|min:8|confirmed',
        'role'     => 'required|in:client,admin,assistant,owner',
        'phone'    => 'nullable|string|max:20',
        'avatar'   => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'address'  => 'nullable|string|max:500',
    ]);

    try {
        // Create user
        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role'     => $validated['role'],
        ]);

        // Handle avatar upload
        $avatarUrl = null;
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store(
                "avatars",
                ['disk' => 's3', 'visibility' => 'public']
            );
            
            $avatarUrl = Storage::disk('s3')->url($path);
        }

        // Create profile
        User_profile::create([
            'user_id' => $user->id,
            'phone'   => $validated['phone'],
            'avatar'  => $avatarUrl,
            'address' => $validated['address'],
        ]);

        return response()->json([
            'user'       => $user->load('profile'),
            'avatar_url' => $avatarUrl
        ], 201);
        
    } catch (\Exception $e) {
        return response()->json([
            'error'   => 'User registration failed',
            'message' => $e->getMessage(),
            'trace'   => config('app.debug') ? $e->getTrace() : null
        ], 500);
    }
}

    //logout method
    public function logoutUser($id)
    {
        //
    }
}
