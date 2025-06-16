<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    protected $table = 'newsletter';  

    protected $fillable = ['email'];

    // لا حاجة لتعريف timestamps لأنه true بشكل افتراضي
}
