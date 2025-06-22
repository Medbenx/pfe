<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * التقييمات التي كتبها المستخدم
     */
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }

    /**
     * الرسائل التي أرسلها المستخدم (إذا كنت تستخدم جدول رسائل عامة)
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    /**
     * العلاقة مع حساب المرشد السياحي (اختياري)
     */
    public function guide(): HasOne
    {
        return $this->hasOne(TouristeGuide::class);
    }
}
