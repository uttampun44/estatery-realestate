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
        Schema::table('options', function (Blueprint $table) {
            $table->dropForeign(['properties_category_id']);
        });


        Schema::table('options', function (Blueprint $table) {
            $table->dropColumn('properties_category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('options', function (Blueprint $table) {
            $table->bigInteger('properties_category_id')->nullable();
        });

        Schema::table('options', function (Blueprint $table) {
            $table->foreign('properties_category_id')->references('id')->on('properties_categories');
        });
    }
};
