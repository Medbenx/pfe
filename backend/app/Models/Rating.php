<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rating extends Model
{
    protected $fillable = [
        'touriste_guide_id',
        'user_id',
        'rating',
        'comment',
    ];

    /**
     * العلاقة مع المرشد السياحي
     */
    public function touristeGuide(): BelongsTo
    {
        return $this->belongsTo(TouristeGuide::class, 'touriste_guide_id');
    }

    /**
     * العلاقة مع المستخدم الذي كتب التقييم
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
