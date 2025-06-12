<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::with('ratings')->get();
    }

    public function show($id)
    {
        return User::with(['ratings'])->findOrFail($id);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'تم حذف المستخدم']);
    }
}
