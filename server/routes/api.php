<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserDataController;

Route::middleware('auth:sanctum')->group(function () {
    // Protected routes with 'auth:sanctum' middleware

    // Get a list of all users
    Route::get('/user-data', [UserDataController::class, 'index']);

    // Get user data by userId
    Route::get('/user-data/{userId}', [UserDataController::class, 'getUserData']);

    // Create a new user
    Route::post('/user-data', [UserDataController::class, 'createUser']);
    
    // Additional routes can be added here
});

