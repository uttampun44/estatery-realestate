<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class AgentsdetailsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $agentsdetails = User::where('role', 2)->get();


        return Inertia::render('Admin/Agentdetails')->with('agentdetails', $agentsdetails);
    }
}
