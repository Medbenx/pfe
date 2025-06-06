<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('touriste_guide_id');
            $table->unsignedBigInteger('user_id');
            $table->tinyInteger('rating');  // مثلا من 1 إلى 5
            $table->text('comment')->nullable();
            $table->timestamps();

            $table->foreign('touriste_guide_id')->references('id')->on('touriste_guides')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
