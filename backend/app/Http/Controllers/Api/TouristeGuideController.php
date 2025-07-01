<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TouristeGuide;
use Illuminate\Http\Request;

class TouristeGuideController extends Controller
{
    public function index(Request $request)
    {
        $query = TouristeGuide::query();

        if ($request->has('language')) {
            $query->where('languages', 'like', '%' . $request->language . '%');
        }

        if ($request->has('min_price')) {
            $query->where('price_per_hour', '>=', $request->min_price);
        }

        if ($request->has('max_price')) {
            $query->where('price_per_hour', '<=', $request->max_price);
        }

        if ($request->has('location')) {
            $query->where('location', 'like', '%' . $request->location . '%');
        }

        $guides = $query->with('ratings', 'user')->get();

        return response()->json($guides);
    }

    public function show($id)
    {
        $guide = TouristeGuide::with('ratings', 'user')->find($id);
        if (!$guide) return response()->json(['message' => 'Guide not found'], 404);
        return response()->json($guide);
    }

    // ✅ إزالة user_id من التحقق
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:touriste_guides,email',
            'phone' => 'required|string|max:20',
            'bio' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'price_per_hour' => 'nullable|numeric',
            'languages' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('guides', 'public');
            $validated['photo'] = $path;
        }

        $guide = TouristeGuide::create($validated);
        return response()->json($guide, 201);
    }

    public function update(Request $request, $id)
    {
        $guide = TouristeGuide::find($id);
        if (!$guide) return response()->json(['message' => 'Guide not found'], 404);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => ['sometimes','email', "unique:touriste_guides,email,{$id}"],
            'phone' => 'sometimes|string|max:20',
            'bio' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'price_per_hour' => 'nullable|numeric',
            'languages' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('guides', 'public');
            $validated['photo'] = $path;
        }

        $guide->update($validated);
        return response()->json($guide);
    }

    public function destroy($id)
    {
        $guide = TouristeGuide::find($id);
        if (!$guide) return response()->json(['message' => 'Guide not found'], 404);

        $guide->delete();
        return response()->json(['message' => 'Guide deleted successfully']);
    }
}
