<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    // عرض كل التقييمات (اختياري)
    public function index()
    {
        return Rating::with(['user', 'touristeGuide'])->get();
    }

    // إنشاء تقييم جديد
    public function store(Request $request)
    {
        $validated = $request->validate([
            'touriste_guide_id' => 'required|exists:touriste_guides,id',
            'user_id' => 'required|exists:users,id',
            'rating' => 'required|numeric|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $rating = Rating::create($validated);

        return response()->json($rating, 201);
    }

    // حذف تقييم (إذا أردت)
    public function destroy($id)
    {
        $rating = Rating::findOrFail($id);
        $rating->delete();

        return response()->json(['message' => 'تم حذف التقييم']);
    }
}
