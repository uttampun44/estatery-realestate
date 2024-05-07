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
        Schema::create('properties_descriptions', function (Blueprint $table) {
            $table->id();
            $table->string('agent_name')->nullable();
            $table->string('properties_types')->nullable();
            $table->string('buy_rent')->nullable();
            $table->integer('number_of_bedrooms')->nullable();
            $table->integer('number_of_bathrooms')->nullable();
            $table->string('square_areas')->nullable();
            $table->tinyInteger('cooling')->nullable();
            $table->tinyInteger('heating')->nullable();
            $table->string('parking_areas')->nullable();
            $table->string('depost_fee')->nullable();
            $table->string('location')->nullable();
            $table->string('year_built')->nullable();
            $table->string('total_area')->nullable();
            $table->tinyInteger('status')->nullable();
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->unsignedBigInteger('agent_id');
            $table->foreign('agent_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties_descriptions');
    }
};
