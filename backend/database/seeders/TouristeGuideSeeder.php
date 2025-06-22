<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TouristeGuide;

class TouristeGuideSeeder extends Seeder
{
    public function run()
    {
        TouristeGuide::create([
            'user_id' => 1,  // رابط للـ admin user
            'name' => 'Guide One',
            'email' => 'guide1@example.com',
            'phone' => '0600000001',
            'bio' => 'Experienced tour guide in the city.',
            'location' => 'Casablanca',
            'photo' => 'guide1.jpg',
            'price_per_hour' => 30.00,
            'languages' => 'Arabic, French, English',
        ]);
    }
}
