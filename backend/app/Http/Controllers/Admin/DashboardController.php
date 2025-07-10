<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\TouristeGuide;
use App\Models\Message;
use App\Models\Newsletter;

class DashboardController extends Controller
{
    // ✅ statistics for the dashboard
    public function stats()
    {
        return response()->json([
            'usersCount' => User::count(),
            'guidesCount' => TouristeGuide::count(),
            'messagesCount' => Message::count(),
            'newslettersCount' => Newsletter::count(),
        ]);
    }

    //grab all newsletters
    public function newsletters()
    {
        return response()->json(Newsletter::all());
    }

    // ✅ grabbing all messages
    public function messages()
    {
        return response()->json(Message::all());
    }

    // ✅ export CSV for newsletters
    public function exportNewslettersCsv()
    {
        $subscribers = Newsletter::all();

        $csvData = "ID,Email,Subscribed At\n";

        foreach ($subscribers as $sub) {
            $csvData .= "{$sub->id},{$sub->email},{$sub->created_at}\n";
        }

        return response($csvData)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename=newsletter_subscribers.csv');
    }

    // ✅ export CSV for messages
    public function exportMessagesCsv()
    {
        $messages = Message::all();

        $csvData = "ID,Name,Email,Message,Sent At\n";

        foreach ($messages as $msg) {
            
            $cleanMessage = str_replace(",", " ", $msg->message);
            $csvData .= "{$msg->id},{$msg->name},{$msg->email},\"{$cleanMessage}\",{$msg->created_at}\n";
        }

        return response($csvData)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename=messages.csv');
    }
    public function deleteMessage($id)
{
    $message = Message::findOrFail($id);
    $message->delete();

    return response()->json(['success' => true]);
}
public function deleteNewsletter($id)
{
    $newsletter = Newsletter::findOrFail($id);
    $newsletter->delete();

    return response()->json(['success' => true]);
}

    
}
