<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    protected $fillable = [
        'user_id', // يمكن أن تكون null لو المرسل زائر غير مسجل
        'name',
        'email',
        'content',
    ];

    /**
     * العلاقة مع المستخدم (إن وجد)
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
