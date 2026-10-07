<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

#[Fillable(['name', 'email', 'password', 'role', 'phone', 'status'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    public const ROLE_SUPER_ADMIN = 'super_admin';
    public const ROLE_RECEPTIONIST = 'receptionist';
    public const ROLE_DOCTOR = 'doctor';
    public const ROLE_NURSE = 'nurse';
    public const ROLE_PHARMACIST = 'pharmacist';
    public const ROLE_CASHIER = 'cashier';
    public const ROLE_LABORATORY_STAFF = 'laboratory_staff';
    public const ROLE_PATIENT = 'patient';

    public const ROLES = [
        self::ROLE_SUPER_ADMIN,
        self::ROLE_RECEPTIONIST,
        self::ROLE_DOCTOR,
        self::ROLE_NURSE,
        self::ROLE_PHARMACIST,
        self::ROLE_CASHIER,
        self::ROLE_LABORATORY_STAFF,
        self::ROLE_PATIENT,
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getDashboardRoute(): string
    {
        return match ($this->role) {
            self::ROLE_SUPER_ADMIN => '/admin/dashboard',
            self::ROLE_RECEPTIONIST => '/receptionist/dashboard',
            self::ROLE_DOCTOR => '/doctor/dashboard',
            self::ROLE_NURSE => '/nurse/dashboard',
            self::ROLE_PHARMACIST => '/pharmacy/dashboard',
            self::ROLE_CASHIER => '/cashier/dashboard',
            self::ROLE_LABORATORY_STAFF => '/laboratory/dashboard',
            default => '/patient/dashboard',
        };
    }
}
