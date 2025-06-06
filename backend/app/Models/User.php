<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    protected $fillable = [
        'name',
        'email',
        'password',
        // الحقول الأخرى حسب الحاجة
    ];

    /**
     * التقييمات التي كتبها المستخدم
     */
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }
}
