<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;

// بيانات المستخدم بعد تسجيل الدخول
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// المسارات العامة
Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::apiResource('guides', TouristeGuideController::class);
Route::apiResource('ratings', RatingController::class)->only(['index','update', 'store', 'destroy']);
Route::apiResource('messages', MessageController::class)->only(['index','show', 'store', 'destroy']);
Route::apiResource('newsletter', NewsletterController::class)->only(['index', 'store', 'destroy']);
Route::apiResource('users', UserController::class)->only(['index','update', 'show', 'destroy']);

// 🟡 هذا مهم: تحميل مسارات المصادقة
require __DIR__.'/auth.php';
