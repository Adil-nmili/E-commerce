<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login',[AuthenticateController::class, 'loginUser']);
Route::post('/register',[AuthenticateController::class, 'registerUser']);
Route::post('/logout',[AuthenticateController::class, 'logoutUser']);
Route::get('/test', function(){
    return response()->json('hello world',201);
});