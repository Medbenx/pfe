<?php

namespace App\Http\Middleware;

use App\Models\Newsletter;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
protected $except = [];
}
