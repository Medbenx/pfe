<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminUserController extends Controller
{
    public function promote(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user->role === 'admin') {
            return response()->json(['message' => 'User is already an admin.'], 400);
        }

        $user->role = 'admin';
        $user->save();

        return response()->json(['message' => 'User promoted to admin successfully.']);
    }
    public function depromote(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user->role !== 'admin') {
            return response()->json(['message' => 'User is not an admin.'], 400);
        }

        $user->role = 'user';
        $user->save();

        return response()->json(['message' => 'Admin demoted to user.']);
}
}
