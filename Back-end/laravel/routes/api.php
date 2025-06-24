<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->group(function () {
//     Route::apiResource('properties', PropertyController::class)->except(['index', 'show']);
// });
Route::apiResource('properties', PropertyController::class)
    ->middleware(['auth:sanctum', 'role:owner,admin']);


// Route::apiResource('properties', PropertyController::class)->only(['index', 'show']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);