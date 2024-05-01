<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use App\Models\Addproperties;
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

                 $add_properties = new Addproperties();

                 $add_properties->agent_name =  $request->input('agent_name');
                 $add_properties->properties_types = $request->input('properties_type');
                 $add_properties->buy_rent = $request->input('buyrent');
                 $add_properties->number_of_bedrooms = $request->input('addproperties');
                 $add_properties->number_of_bathrooms = $request->input('bathroom');
                 $add_properties->square_areas = $request->input('squarearea');
                 $add_properties->cooling = $request->input('cooling');
                 $add_properties->heating = $request->input('heating');
                 $add_properties->parking_areas = $request->input('parking_areas');
                 $add_properties->depost_fee = $request->input('deposit_fees');
                 $add_properties->location = $request->input('location');
                 $add_properties->year_built = $request->input('built_year');
                 $add_properties->total_areas = $request->input('total_area');
                 $add_properties->status = $request->input('active');
                 $add_properties->image = $request->input('image');
                 $add_properties->description  = $request->input('add_description');
                 $add_properties->agent_id = $request->input('agent_name');

                 dd($add_properties);

                 $add_properties->save();

                 return redirect()->route('add-properites.index');

             } catch (\Throwable $th) {

                Addproperties::error($th);

                return back()->with('error', 'An error occurred while saving the property. Please try again later.');
             }


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
