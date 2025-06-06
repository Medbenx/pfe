<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        return Message::with('user')->latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'name' => 'required|string',
            'email' => 'required|email',
            'content' => 'required|string',
        ]);

        $message = Message::create($validated);

        return response()->json($message, 201);
    }

    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return response()->json(['message' => 'تم حذف الرسالة']);
    }
}
