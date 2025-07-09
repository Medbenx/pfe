<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Admin\DashboardController;

// ✅ جلب المستخدم الحالي بعد تسجيل الدخول
Route::middleware(['auth:sanctum'])->get('/user', fn(Request $request) => $request->user());

// ✅ رسالة ترحيبية عند فتح /api
Route::get('/', fn() => response()->json(['message' => 'Welcome to the API']));

// ✅ مسارات عامة
Route::apiResource('touriste-guides', TouristeGuideController::class)->only([
    'index', 'show', 'store', 'update', 'destroy'
]);

Route::apiResource('ratings', RatingController::class)->only([
    'index', 'update', 'store', 'destroy'
]);

Route::apiResource('messages', MessageController::class)->only([
    'index', 'show', 'store', 'destroy'
]);

Route::apiResource('newsletter', NewsletterController::class)->only([
    'index', 'store', 'destroy'
]);

Route::apiResource('users', UserController::class)->only([
    'index', 'update', 'show', 'destroy'
]);

// ✅ اختبار الجلسة: هل المستخدم مسجل فعلاً؟
Route::middleware('auth:sanctum')->get('/test-session', function (Request $request) {
    return response()->json([
        'user' => Auth::user(),
    ]);
});

// ✅ مسارات مسؤول (admin) فقط
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/stats', [DashboardController::class, 'stats']);
});

// ✅ استيراد auth routes
require __DIR__ . '/auth.php';
