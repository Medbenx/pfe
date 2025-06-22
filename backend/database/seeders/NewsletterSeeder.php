<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Newsletter;

class NewsletterSeeder extends Seeder
{
    public function run()
    {
        Newsletter::create([
            'email' => 'subscriber@example.com',
        ]);
    }
}
