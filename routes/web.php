<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AgentsdetailsController;
use App\Http\Controllers\Admin\AdmindashboardController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Admin\AddpropertiesController;
use App\Http\Controllers\Agent\AgentdashboardController;
use App\Http\Controllers\Agent\AgentaddpropertiesController;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

/**********Front END**********/
Route::get('/', HomeController::class)->name('front.home');

Route::middleware(['auth', 'verified', 'admin'])->group( function(){
    Route::get('/admin/agent-details', [AgentsdetailsController::class, '__invoke']);
    Route::get('/admin/dashboard', [AdmindashboardController::class, '__invoke'])->name('dashboard');
    Route::resource('/admin/add-properties-category', AddpropertiesController::class);

});

Route::middleware(['auth', 'verified', 'agents'])->group( function(){
   Route::get('/agent/dashboard', [AgentdashboardController::class, '__invoke'])->name('agent.dashboard');
   Route::get('/agent/add-properites', [AgentaddpropertiesController::class, 'create'])->name('agentproperties.create');
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
