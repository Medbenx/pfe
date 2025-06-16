<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Message;

class MessageSeeder extends Seeder
{
    public function run(): void
    {
        Message::create([
            'name' => 'أحمد',
            'email' => 'ahmed@example.com',
            'message' => 'هل يمكننا تنظيم جولة خاصة في الأسبوع القادم؟',
        ]);

        Message::create([
            'name' => 'المرشد محمد',
            'email' => 'mohamedguide@example.com',
            'message' => 'نعم، بالتأكيد! ما هو الوقت المناسب لك؟',
        ]);
    }
}
