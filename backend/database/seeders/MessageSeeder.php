<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Message;

class MessageSeeder extends Seeder
{
    public function run()
    {
        Message::create([
            'email' => 'visitor@example.com',
            'message' => 'I want to know more about your tours.',
        ]);
    }
}
