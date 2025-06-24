<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens; // أضف هذا السطر
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable; // أضف HasApiTokens هنا

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

    // العلاقات:
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function guide(): HasOne
    {
        return $this->hasOne(TouristeGuide::class);
    }
}
