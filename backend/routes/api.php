<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;

//عد تسجيل    
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes
Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::apiResource('touriste-guides', TouristeGuideController::class)->only(['index', 'show', 'store', 'update', 'destroy']);
Route::apiResource('ratings', RatingController::class)->only(['index','update', 'store', 'destroy']);
Route::apiResource('messages', MessageController::class)->only(['index','show', 'store', 'destroy']);
Route::apiResource('newsletter', NewsletterController::class)->only(['index', 'store', 'destroy']);
Route::apiResource('users', UserController::class)->only(['index','update', 'show', 'destroy']);

// protected routes
require __DIR__.'/auth.php';
