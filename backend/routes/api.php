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
use App\Http\Controllers\Admin\AdminUserController;

// ✅ جلب المستخدم الحالي بعد تسجيل الدخول
Route::middleware(['auth:sanctum'])->get('/user', fn(Request $request) => $request->user());

// ✅ رسالة ترحيبية عند فتح /api
Route::get('/', fn() => response()->json(['message' => 'Welcome to the API']));

// ✅ مسارات عامة (API Resources)
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

// ✅ isAuthenticated
Route::middleware('auth:sanctum')->get('/test-session', function (Request $request) {
    return response()->json([
        'user' => Auth::user(),
    ]);
});

// ✅ admin routes (Admin only)
Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    // statistics
    Route::get('/stats', [DashboardController::class, 'stats']);

    // delete routes
    Route::delete('/messages/{id}', [DashboardController::class, 'deleteMessage']);
    Route::delete('/newsletters/{id}', [DashboardController::class, 'deleteNewsletter']);

    // messages
    Route::get('/messages', [DashboardController::class, 'messages']);
    Route::get('/messages/export-csv', [DashboardController::class, 'exportMessagesCsv']);

    // newsletter
    Route::get('/newsletters', [DashboardController::class, 'newsletters']);
    Route::get('/newsletters/export-csv', [DashboardController::class, 'exportNewslettersCsv']);
     
    // promote user to admin
     Route::post('/promote', [AdminUserController::class, 'promote']);
    // demote admin to user
     Route::post('/depromote', [AdminUserController::class, 'depromote']);
});

// ✅ auth routes
require __DIR__ . '/auth.php';
