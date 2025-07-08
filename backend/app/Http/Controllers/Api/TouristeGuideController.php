<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TouristeGuide;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        if (!$guide) {
            return response()->json(['message' => 'Guide not found'], 404);
        }
        return response()->json($guide);
    }

   public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',  // ضروري ترسل كلمة مرور مع البيانات!
        'phone' => 'required|string|max:20',
        'bio' => 'nullable|string',
        'location' => 'nullable|string|max:255',
        'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        'price_per_hour' => 'nullable|numeric',
        'languages' => 'nullable|string|max:255',
    ]);

    // 1. إنشاء المستخدم
    $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password']),
        'role' => 'guide',
    ]);

    // 2. حفظ الصورة
    if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('guides', 'public');
        $validated['photo'] = $path;
    }

    // 3. إنشاء المرشد السياحي مرتبط بالمستخدم
    TouristeGuide::create([
        'user_id' => $user->id,
        'name' => $validated['name'],
        'email' => $validated['email'],
        'phone' => $validated['phone'],
        'bio' => $validated['bio'] ?? null,
        'location' => $validated['location'] ?? null,
        'photo' => $validated['photo'] ?? null,
        'price_per_hour' => $validated['price_per_hour'] ?? null,
        'languages' => $validated['languages'] ?? null,
    ]);

    return response()->json(['message' => 'Guide registered successfully'], 201);
}


    public function destroy($id)
    {
        $guide = TouristeGuide::find($id);
        if (!$guide) {
            return response()->json(['message' => 'Guide not found'], 404);
        }

        $guide->delete();
        return response()->json(['message' => 'Guide deleted successfully']);
    }
}
