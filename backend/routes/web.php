<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TouristeGuideController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;

Route::prefix('api')->middleware('api')->group(function () {

    Route::get('/', function () {
        return response()->json(['message' => 'Welcome to the API']);
    });

    // المرشدين السياحيين
    Route::apiResource('guides', TouristeGuideController::class);

    // التقييمات
    Route::apiResource('ratings', RatingController::class)->only(['index', 'store', 'destroy']);

    // الرسائل
    Route::apiResource('messages', MessageController::class)->only(['index', 'store', 'destroy']);

    // النشرة البريدية
    Route::apiResource('newsletters', NewsletterController::class)->only(['index', 'store', 'destroy']);

    // المستخدمين
    Route::apiResource('users', UserController::class)->only(['index', 'show', 'destroy']);
});
