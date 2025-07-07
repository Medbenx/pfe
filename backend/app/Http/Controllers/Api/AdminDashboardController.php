<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index()
    {
        // هنا ضع بيانات لوحة تحكم الأدمن، كمثال:
        return response()->json([
            'message' => 'Welcome to Admin Dashboard',
            // بيانات أخرى تريد إرسالها
        ]);
    }
}
