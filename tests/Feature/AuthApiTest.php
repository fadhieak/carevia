<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_user_can_login_with_correct_credentials(): void
    {
        $response = $this->postJson('/api/v1/auth/login', [
            'email' => 'admin@carevia.id',
            'password' => 'password',
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.user.role', 'super_admin')
            ->assertJsonPath('data.user.dashboard_route', '/admin/dashboard');

        $this->assertNotEmpty($response->json('data.token'));
    }

    public function test_doctor_login_redirects_to_doctor_dashboard(): void
    {
        $response = $this->postJson('/api/v1/auth/login', [
            'email' => 'doctor@carevia.id',
            'password' => 'password',
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('data.user.role', 'doctor')
            ->assertJsonPath('data.user.dashboard_route', '/doctor/dashboard');
    }

    public function test_login_fails_with_invalid_credentials(): void
    {
        $response = $this->postJson('/api/v1/auth/login', [
            'email' => 'admin@carevia.id',
            'password' => 'wrongpassword',
        ]);

        $response->assertStatus(422)
            ->assertJsonPath('status', 'error');
    }

    public function test_patient_can_register_successfully(): void
    {
        $uniqueEmail = 'newpatient_' . uniqid() . '@example.com';

        $response = $this->postJson('/api/v1/auth/register', [
            'name' => 'Budi Pratama',
            'email' => $uniqueEmail,
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '081299998888',
            // Try to maliciously submit super_admin role - should still be assigned patient
            'role' => 'super_admin',
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('status', 'success')
            ->assertJsonPath('data.user.role', 'patient')
            ->assertJsonPath('data.user.dashboard_route', '/patient/dashboard');

        $this->assertDatabaseHas('users', [
            'email' => $uniqueEmail,
            'role' => 'patient',
        ]);
    }

    public function test_auth_me_returns_profile(): void
    {
        $user = User::where('email', 'admin@carevia.id')->first();
        $token = $user->createToken('test-token')->plainTextToken;

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
            ->getJson('/api/v1/auth/me');

        $response->assertStatus(200)
            ->assertJsonPath('data.user.email', 'admin@carevia.id')
            ->assertJsonPath('data.user.role', 'super_admin');
    }

    public function test_role_middleware_enforces_permissions(): void
    {
        $doctor = User::where('email', 'doctor@carevia.id')->first();
        $doctorToken = $doctor->createToken('doctor-token')->plainTextToken;

        // Doctor should succeed on doctor ping
        $successResponse = $this->withHeader('Authorization', 'Bearer ' . $doctorToken)
            ->getJson('/api/v1/doctor/ping');
        $successResponse->assertStatus(200);

        // Doctor should be forbidden (403) on admin ping
        $forbiddenResponse = $this->withHeader('Authorization', 'Bearer ' . $doctorToken)
            ->getJson('/api/v1/admin/ping');
        $forbiddenResponse->assertStatus(403);
    }

    public function test_user_can_logout(): void
    {
        $user = User::where('email', 'patient@carevia.id')->first();
        $token = $user->createToken('logout-test')->plainTextToken;

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
            ->postJson('/api/v1/auth/logout');

        $response->assertStatus(200)
            ->assertJsonPath('status', 'success');
    }
}
