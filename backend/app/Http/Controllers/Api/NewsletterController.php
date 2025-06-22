<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    // عرض كل المشتركين في النشرة البريدية
    public function index()
    {
        $subscribers = Newsletter::all();
        return response()->json($subscribers);
    }

    // عرض مشترك واحد
    public function show($id)
    {
        $subscriber = Newsletter::find($id);
        if (!$subscriber) {
            return response()->json(['message' => 'Subscriber not found'], 404);
        }
        return response()->json($subscriber);
    }

    // إضافة مشترك جديد
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletter,email',
        ]);

        $subscriber = Newsletter::create($validated);
        return response()->json($subscriber, 201);
    }

    // حذف مشترك
    public function destroy($id)
    {
        $subscriber = Newsletter::find($id);
        if (!$subscriber) {
            return response()->json(['message' => 'Subscriber not found'], 404);
        }

        $subscriber->delete();
        return response()->json(['message' => 'Subscriber deleted successfully']);
    }
}
