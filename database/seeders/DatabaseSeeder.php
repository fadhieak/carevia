<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Super Admin (Administrator Utama)',
                'email' => 'admin@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_SUPER_ADMIN,
                'phone' => '081234567890',
                'status' => 'active',
            ],
            [
                'name' => 'Siti Rahma (Front Desk & Resepsionis)',
                'email' => 'receptionist@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_RECEPTIONIST,
                'phone' => '081234567891',
                'status' => 'active',
            ],
            [
                'name' => 'dr. Farhan Pratama, Sp.PD (Dokter Spesialis)',
                'email' => 'doctor@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_DOCTOR,
                'phone' => '081234567892',
                'status' => 'active',
            ],
            [
                'name' => 'Ns. Dewi Lestari, S.Kep (Perawat Rawat Inap)',
                'email' => 'nurse@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_NURSE,
                'phone' => '081234567893',
                'status' => 'active',
            ],
            [
                'name' => 'apt. Budi Santoso, S.Farm (Kepala Instalasi Farmasi)',
                'email' => 'pharmacist@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_PHARMACIST,
                'phone' => '081234567894',
                'status' => 'active',
            ],
            [
                'name' => 'Rina Anggraini, S.E. (Petugas Kasir & Billing)',
                'email' => 'cashier@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_CASHIER,
                'phone' => '081234567895',
                'status' => 'active',
            ],
            [
                'name' => 'Ahmad Fauzi, A.Md.AK (Analis Laboratorium)',
                'email' => 'lab@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_LABORATORY_STAFF,
                'phone' => '081234567896',
                'status' => 'active',
            ],
            [
                'name' => 'Anisa Maharani (Pasien Rawat Jalan)',
                'email' => 'patient@carevia.id',
                'password' => Hash::make('password'),
                'role' => User::ROLE_PATIENT,
                'phone' => '081234567897',
                'status' => 'active',
            ],
        ];

        foreach ($users as $userData) {
            User::updateOrCreate(
                ['email' => $userData['email']],
                $userData
            );
        }
    }
}
