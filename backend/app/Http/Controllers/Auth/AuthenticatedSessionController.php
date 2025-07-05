<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthenticatedSessionController extends Controller
{
public function store(LoginRequest $request): JsonResponse
{
    $request->authenticate();

    $user = $request->user();

    return response()->json([
        'user' => $user,
        'role' => $user->role,
        'redirect' => $user->role === 'admin' ? '/admin/dashboard' : '/user/dashboard',
        'message' => 'Login successful',
    ]);
}


    

    public function destroy(Request $request): Response
    {
        // delete the current access token
        $request->user()->currentAccessToken()?->delete();

        return response()->noContent();
    }
}
