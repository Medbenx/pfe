<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TouristeGuide extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'bio',
        'location',
        'price_per_hour',
        'photo',
    ];

    /**
     * التقييمات التي حصل عليها المرشد السياحي
     */
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class, 'touriste_guide_id');
    }

    /**
     * متوسط تقييم المرشد
     */
    public function averageRating(): float
    {
        return $this->ratings()->avg('rating') ?? 0;
    }
}
