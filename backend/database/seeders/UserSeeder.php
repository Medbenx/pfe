<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@morocompass.com',
            'password' => Hash::make('password'), // استبدلها بكلمة سر قوية عند الحاجة
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Regular User',
            'email' => 'user@morocompass.com',
            'password' => Hash::make('password'),
            'role' => 'user',
        ]);
    }
}
