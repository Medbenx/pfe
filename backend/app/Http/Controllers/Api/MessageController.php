<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    // عرض كل الرسائل
    public function index()
    {
        $messages = Message::all();
        return response()->json($messages);
    }

    // عرض رسالة واحدة
    public function show($id)
    {
        $message = Message::find($id);
        if (!$message) {
            return response()->json(['message' => 'Message not found'], 404);
        }
        return response()->json($message);
    }

    // إنشاء رسالة جديدة
  public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255', 
        'email' => 'required|email',
        'message' => 'required|string',
    ]);

    $message = Message::create($validated);
    return response()->json($message, 201);
}

    // تحديث رسالة (اختياري)
    public function update(Request $request, $id)
    {
        $message = Message::find($id);
        if (!$message) {
            return response()->json(['message' => 'Message not found'], 404);
        }

        $validated = $request->validate([
            'email' => 'sometimes|email',
            'message' => 'sometimes|string',
        ]);

        $message->update($validated);
        return response()->json($message);
    }

    // حذف رسالة
    public function destroy($id)
    {
        $message = Message::find($id);
        if (!$message) {
            return response()->json(['message' => 'Message not found'], 404);
        }

        $message->delete();
        return response()->json(['message' => 'Message deleted successfully']);
    }
}
