<?php

namespace App\Http\Controllers;

use App\Models\TouristeGuide;
use Illuminate\Http\Request;

class TouristeGuideController extends Controller
{
    // عرض كل المرشدين السياحيين
    public function index()
    {
        return TouristeGuide::with('ratings')->get();
    }

    // عرض مرشد سياحي معين
    public function show($id)
    {
        $guide = TouristeGuide::with('ratings')->findOrFail($id);
        return response()->json($guide);
    }

    // إنشاء مرشد سياحي
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:touriste_guides',
            'phone' => 'required|string',
            'bio' => 'nullable|string',
            'location' => 'required|string',
            'price_per_hour' => 'required|numeric',
            'photo' => 'nullable|string', // لاحقًا يمكن تعديله لـ file upload
        ]);

        $guide = TouristeGuide::create($validated);

        return response()->json($guide, 201);
    }

    // تعديل مرشد سياحي
    public function update(Request $request, $id)
    {
        $guide = TouristeGuide::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string',
            'email' => 'sometimes|email|unique:touriste_guides,email,' . $id,
            'phone' => 'sometimes|string',
            'bio' => 'nullable|string',
            'location' => 'sometimes|string',
            'price_per_hour' => 'sometimes|numeric',
            'photo' => 'nullable|string',
        ]);

        $guide->update($validated);

        return response()->json($guide);
    }

    // حذف مرشد سياحي
    public function destroy($id)
    {
        $guide = TouristeGuide::findOrFail($id);
        $guide->delete();

        return response()->json(['message' => 'تم الحذف بنجاح']);
    }
}
