<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TouristeGuideController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MessageController;

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to the API']);
});

Route::apiResource('guides', TouristeGuideController::class);

Route::apiResource('ratings', RatingController::class)->only(['index','update', 'store', 'destroy']);

Route::apiResource('messages', MessageController::class)->only(['index','show', 'store', 'destroy']);

Route::apiResource('newsletter', NewsletterController::class)->only(['index', 'store', 'destroy']);

Route::apiResource('users', UserController::class)->only(['index','update', 'show', 'destroy']);
