<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Properties;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

use function PHPUnit\Framework\returnSelf;

class AddpropertiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $properties_details = Properties::all();


        return  Inertia::render('Admin/Detailsproperties')->with('properties', $properties_details);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Addproperties');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $properties = Properties::create([
             'properties_categories' => $request->input('add_properties'),
             'properties_slug' => Str::slug($request->input('add_properties'))
        ]);

        $properties->save();

        return redirect()->route('add-properties-category.index');
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
        $properties_id = Properties::findOrFail($id);

        return Inertia::render('Admin/Editproperties')->with('properties_edit', $properties_id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {


        $properties_update = Properties::findOrFail($id);

        $properties_update->properties_categories = $request->input('add_properties');
        $properties_update->properties_slug = Str::slug($request->input('add_properties'));

        $properties_update->save();

        return Redirect::route('add-properties-category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $properties_delete = Properties::findOrFail($id);


        if($properties_delete)
        {
            $properties_delete->delete();

            Redirect::route('add-properties-category.index');
        }
    }
}
