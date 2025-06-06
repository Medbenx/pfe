<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function index()
    {
        return Newsletter::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletters,email',
        ]);

        $subscriber = Newsletter::create($validated);

        return response()->json($subscriber, 201);
    }

    public function destroy($id)
    {
        $subscriber = Newsletter::findOrFail($id);
        $subscriber->delete();

        return response()->json(['message' => 'تم إلغاء الاشتراك بنجاح']);
    }
}
