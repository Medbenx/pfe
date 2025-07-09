<?php

use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Application;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // تعريف aliases لميدلوير
        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
            'admin' => \App\Http\Middleware\AdminMiddleware::class,
        ]);

        // إضافة HandleCors إلى مجموعة 'api'
        $middleware->appendToGroup('api', \Illuminate\Http\Middleware\HandleCors::class);

        // مجموعة Middleware لـ api مع الجلسات
        $middleware->group('api', [
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);
    })
    ->withExceptions(function () {
        //
    })
    ->create();
