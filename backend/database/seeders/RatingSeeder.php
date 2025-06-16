<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rating;

class RatingSeeder extends Seeder
{
    public function run()
    {
        Rating::create([
            'user_id' => 2,
            'touriste_guide_id' => 1,
            'rating' => 5,
            'comment' => 'خدمة ممتازة، تجربة رائعة مع المرشد محمد!',
        ]);

        Rating::create([
            'user_id' => 1,
            'touriste_guide_id' => 2,
            'rating' => 4,
            'comment' => 'رحلة ممتعة مع سارة، أنصح بها بشدة.',
        ]);
    }
}
