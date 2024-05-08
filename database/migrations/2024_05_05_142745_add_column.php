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
        Schema::table('properties_descriptions', function (Blueprint $table) {
            $table->string('original_price')->nullable()->after('depost_fee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('properties_descriptions', function (Blueprint $table) {
            $table->dropColumn('original_price');
        });
    }
};
