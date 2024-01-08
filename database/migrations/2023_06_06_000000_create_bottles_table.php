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
        Schema::create('bottles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('filter');
            $table->string('since');
            $table->string('distribution')->nullable();
            $table->string('totalAmount')->nullable();
            $table->string('designer')->nullable();
            $table->text('description');
            $table->string('frontPhoto');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bottles');
    }
};
