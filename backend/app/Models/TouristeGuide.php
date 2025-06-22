<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TouristeGuide extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'bio',
        'location',
        'photo',
        'price_per_hour',
        'languages',
    ];

    protected $casts = [
        'price_per_hour' => 'float',
    ];

    protected $appends = ['average_rating', 'rating_count'];

    /**
     * العلاقة مع التقييمات
     */
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class, 'touriste_guide_id');
    }

    /**
     * العلاقة مع المستخدم (صاحب الحساب)
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * متوسط التقييم
     */
    public function getAverageRatingAttribute(): float
    {
        return round($this->ratings()->avg('rating') ?? 0, 1);
    }

    /**
     * عدد التقييمات
     */
    public function getRatingCountAttribute(): int
    {
        return $this->ratings()->count();
    }
}
