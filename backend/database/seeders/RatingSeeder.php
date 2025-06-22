<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rating;

class RatingSeeder extends Seeder
{
    public function run()
    {
        Rating::create([
            'touriste_guide_id' => 1,
            'user_id' => 2,
            'rating' => 5,
            'comment' => 'Great guide, very knowledgeable!',
        ]);
    }
}
