<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('touriste_guides', function (Blueprint $table) {
            $table->id();

            // مفتاح الربط مع جدول المستخدمين
            $table->unsignedBigInteger('user_id')->unique();

            $table->string('name');
            $table->string('email'); 
            
            $table->string('phone')->nullable();
            $table->text('bio')->nullable();
            $table->string('location')->nullable();
            $table->float('price_per_hour')->nullable();
            $table->string('photo')->nullable();
            $table->timestamps();

            // تعريف المفتاح الأجنبي مع المستخدمين (users)
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('touriste_guides');
    }
};
