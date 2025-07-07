<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Admin\DashboardController;

// ✅ جلب المستخدم الحالي بعد تسجيل الدخول
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// ✅ مسار ترحيبي عام
Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

// ✅ مسارات عامة (متاحة للجميع)
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

// ✅ ✅ ✅ مسارات محمية للأدمن فقط
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {

    // 🔐 Dashboard stats
    Route::get('/stats', [DashboardController::class, 'stats']);

    // ⛔️ لاحقًا: يمكن إضافة مسارات أخرى للأدمن هنا
    // Route::apiResource('users', AdminUserController::class);
});

// ✅ استيراد مسارات auth (login/register/logout)
require __DIR__ . '/auth.php';
