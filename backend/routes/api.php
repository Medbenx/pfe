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

// Public routes for TouristeGuides
Route::get('/guides', [TouristeGuideController::class, 'index']);
Route::get('/guides/{id}', [TouristeGuideController::class, 'show']);

// Protected routes for TouristeGuides
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/guides', [TouristeGuideController::class, 'store']);
    Route::put('/guides/{id}', [TouristeGuideController::class, 'update']);
    Route::delete('/guides/{id}', [TouristeGuideController::class, 'destroy']);
});
Route::apiResource('ratings', RatingController::class)->only(['index','update', 'store', 'destroy']);
Route::apiResource('messages', MessageController::class)->only(['index','show', 'store', 'destroy']);
Route::apiResource('newsletter', NewsletterController::class)->only(['index', 'store', 'destroy']);
Route::apiResource('users', UserController::class)->only(['index','update', 'show', 'destroy']);

// protected routes
require __DIR__.'/auth.php';
