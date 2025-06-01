<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTouristeGuidesTable extends Migration
{
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // الذي يقيم
            $table->foreignId('guide_id')->constrained('users')->onDelete('cascade'); // المرشد الذي يُقيّم

            $table->tinyInteger('rating')->unsigned(); // التقييم (مثلاً 1 إلى 5)
            $table->text('comment')->nullable(); // تعليق اختياري

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ratings');
    }
}
