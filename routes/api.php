<?php

use App\Http\Controllers\Api\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Carevia Healthcare Management Platform
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Authentication Routes (Public)
    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);

        // Authenticated Auth Routes
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/me', [AuthController::class, 'me']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

    // Role-protected sample endpoints to verify authorization
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::middleware('role:'.User::ROLE_SUPER_ADMIN)->get('/admin/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Super Admin authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_RECEPTIONIST.','.User::ROLE_SUPER_ADMIN)->get('/receptionist/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Receptionist authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_DOCTOR)->get('/doctor/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Doctor authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_NURSE)->get('/nurse/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Nurse authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_PHARMACIST)->get('/pharmacy/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Pharmacist authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_CASHIER)->get('/cashier/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Cashier authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_LABORATORY_STAFF)->get('/laboratory/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Laboratory staff authorized', 'user' => $request->user()->name]);
        });

        Route::middleware('role:'.User::ROLE_PATIENT)->get('/patient/ping', function (Request $request) {
            return response()->json(['status' => 'success', 'message' => 'Patient authorized', 'user' => $request->user()->name]);
        });
    });
});
