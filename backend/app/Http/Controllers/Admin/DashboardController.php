<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\TouristeGuide;
use App\Models\Message;

class DashboardController extends Controller
{
    public function stats()
    {
        return response()->json([
            'usersCount' => User::count(),
            'guidesCount' => TouristeGuide::count(),
            'messagesCount' => Message::count(),
        ]);
    }
}
