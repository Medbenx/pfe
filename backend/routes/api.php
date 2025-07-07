<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;

// بعد تسجيل الدخول    
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// مسارات عامة
Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::apiResource('touriste-guides', TouristeGuideController::class)->only(['index', 'show', 'store', 'update', 'destroy']);
Route::apiResource('ratings', RatingController::class)->only(['index','update', 'store', 'destroy']);
Route::apiResource('messages', MessageController::class)->only(['index','show', 'store', 'destroy']);
Route::apiResource('newsletter', NewsletterController::class)->only(['index', 'store', 'destroy']);
Route::apiResource('users', UserController::class)->only(['index','update', 'show', 'destroy']);

// مسارات محمية للأدمن فقط
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    // هنا تضيف مسارات الأدمن المحمية
    Route::get('/admin/dashboard-data', [App\Http\Controllers\Api\AdminDashboardController::class, 'index']);
    
    // مثال آخر: إدارة المستخدمين (لو تريد تحكم الأدمن فقط)
    Route::apiResource('admin/users', UserController::class)->only(['index', 'update', 'destroy']);
    
    // أضف باقي مسارات الأدمن هنا
});

// استدعاء مسارات auth (تسجيل دخول، تسجيل، الخ)
require __DIR__.'/auth.php';
