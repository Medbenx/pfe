<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TouristeGuide;

class TouristeGuideSeeder extends Seeder
{
    public function run()
    {
        TouristeGuide::create([
            'name' => 'محمد المرشد',
            'email' => 'mohamed.guide@example.com',
            'phone' => '0612345678',
            'bio' => 'مرشد سياحي ذو خبرة واسعة في المغرب، خصوصًا في مراكش والرباط.',
            'location' => 'مراكش',
            'price_per_hour' => 150.0,
            'photo' => 'guide1.jpg',
        ]);

        TouristeGuide::create([
            'name' => 'سارة الجبلية',
            'email' => 'sara.guide@example.com',
            'phone' => '0698765432',
            'bio' => 'خبيرة في الرحلات الجبلية وجولات الطبيعة في شفشاون.',
            'location' => 'شفشاون',
            'price_per_hour' => 120.0,
            'photo' => 'guide2.jpg',
        ]);
    }
}
