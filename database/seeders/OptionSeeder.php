<?php

namespace Database\Seeders;

use App\Models\Option\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Option::insert([
            [
                'sale_rent' => 'Sale'
            ],
            [
                'sale_rent' => 'Rent'
            ]
            ]);
    }
}
