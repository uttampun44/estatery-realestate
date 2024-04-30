<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use App\Models\Option\Option;
use App\Models\Properties;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentaddpropertiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Agent/Addproperties/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $users = User::where('role', 2)->get();
        $properties = Properties::all();
        $options = Option::all();

        return Inertia::render('Agent/Addproperties/Create')->with(
            [
            'users' => $users,
            'properties' => $properties,
            'options' => $options
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

             try {

             } catch (\Throwable $th) {

             }

       $add_properties = $request->validate([
           'agent_name' => 'required',
           'properties_type' => 'required',
           'buyrent' => 'required',
           'addproperties' => 'required',
           'bathroom' => 'required',
           'squarearea' => 'required',
           'cooling' => 'required',
           'heating' => 'required',
           'parking_areas' => 'required',
           'deposit_fees' => 'required',
           'built_year' => 'required',
           'total_area' => 'required',
           'active' => 'required',
           'image' => 'required',
           'add_description' => 'required'
       ]);


        dd($request->input('cooling'));


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
