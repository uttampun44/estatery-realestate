<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use App\Models\Addproperties;
use App\Models\Option\Option;
use App\Models\Properties;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;


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

                 $option_id =   $request->input('buyrent');
                 $properties_id = $request->input('properties_type');

                 $option = Option::find($option_id);
                 $properties = Properties::find($properties_id);


                 $images = [];

                 if($request->hasFile('image'))
                 {
                    foreach ($request->file('image') as  $image) {
                        $image_file = $image->store('public', 'uploads');
                        $images[] = $image_file;
                    }
                 }



                 $add_properties = Addproperties::create([
                    'agent_name' => $request->input('agent_name'),
                    'properties_types' => $properties->id,
                    'buy_rent' => $option->id,
                    'number_of_bedrooms' => $request->input('number_of_bedrooms'),
                    'number_of_bathrooms'=> $request->input('bathroom'),
                    'square_areas' => $request->input('squarearea'),
                    'cooling' => $request->input('cooling'),
                    'heating' => $request->input('heating'),
                    'parking_areas' => $request->input('parking_areas'),
                    'depost_fee' => $request->input('deposit_fees'),
                    'original_price' => $request->input('original_price'),
                    'location' => $request->input('location'),
                    'year_built' => $request->input('built_year'),
                    'total_area' =>  $request->input('total_area'),
                    'status' => $request->input('active'),
                    'image' => $images,
                    'description' => $request->input('description'),
                    'agent_id' => Auth::user()->id,
                 ]);

                 $add_properties->save();

                 return redirect()->route('add-properites.index');

             } catch (\Throwable $th) {

                Log::error($th);

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
