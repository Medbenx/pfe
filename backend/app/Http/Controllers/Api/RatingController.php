<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    // عرض كل التقييمات
    public function index()
    {
        $ratings = Rating::with(['user', 'touristeGuide'])->get();
        return response()->json($ratings);
    }

    // عرض تقييم معين
    public function show($id)
    {
        $rating = Rating::with(['user', 'touristeGuide'])->find($id);
        if (!$rating) {
            return response()->json(['message' => 'Rating not found'], 404);
        }
        return response()->json($rating);
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

    // تحديث تقييم
    public function update(Request $request, $id)
    {
        $rating = Rating::find($id);
        if (!$rating) {
            return response()->json(['message' => 'Rating not found'], 404);
        }

        $validated = $request->validate([
            'touriste_guide_id' => 'sometimes|exists:touriste_guides,id',
            'user_id' => 'sometimes|exists:users,id',
            'rating' => 'sometimes|numeric|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $rating->update($validated);
        return response()->json($rating);
    }

    // حذف تقييم
    public function destroy($id)
    {
        $rating = Rating::find($id);
        if (!$rating) {
            return response()->json(['message' => 'Rating not found'], 404);
        }

        $rating->delete();
        return response()->json(['message' => 'Rating deleted successfully']);
    }
}
