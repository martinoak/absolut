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
            $table->string('name', 18)->unique();
            $table->string('filter')->nullable();
            $table->string('since')->nullable();
            $table->string('distribution')->nullable();
            $table->string('totalAmount')->nullable();
            $table->string('designer')->nullable();
            $table->text('description')->nullable();
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
