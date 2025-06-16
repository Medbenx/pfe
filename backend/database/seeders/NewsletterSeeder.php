<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Newsletter;

class NewsletterSeeder extends Seeder
{
    public function run(): void
    {
        Newsletter::create([
            'email' => 'user1@example.com',
        ]);

        Newsletter::create([
            'email' => 'user2@example.com',
        ]);

        Newsletter::create([
            'email' => 'test@example.com',
        ]);
    }
}
