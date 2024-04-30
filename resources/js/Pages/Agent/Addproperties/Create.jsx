import { Head,  Link } from "@inertiajs/react";
import Sidebaragent from '../../../Components/Agentsidebar';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";


function Create({auth, users, properties, options}) {

  const [editor, setEditor] = useState(null);


  const [addproperties, setProperties] = useState({
    'agent_name' : '',
    'properties_type' : '',
    'buyrent': '',
    'addproperties': '',
    'bathroom': '',
    'squarearea': '',
    'cooling' : '',
    'heating' : '',
    'parking_areas': '',
    'deposit_fees' : '',
    'location' : '',
    'built_year' : '',
    'total_area': '',
    'active' : '',
    'image' : '',
    'add_description': ''
  })

  const PropertiesVal =  (event) => {
     const {name, value} = event.target

     setProperties({
       ...addproperties, [name] : value
     })
  }



    useEffect(() => {
      if (editor === null) {
          ClassicEditor
              .create(document.querySelector('#editor'))
              .then(newEditor => {
                  setEditor(newEditor);
              })
              .catch(error => {
                  console.error(error);
              });
      }
  }, [editor]);

 const createProperties = (event) => {
   event.preventDefault()

   Inertia.post(route('add-properites.store'), addproperties)
 }

  return (
    <div>
          <Sidebaragent />
          <AuthenticatedLayout user={auth.user}>
          <Head title="Agent Add Properties" />

          <div className="py-12">
                <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                           <div className="create_properties_agent form p-4">
                                   <form onSubmit={createProperties} method="POST">
                                          <div className="grid grid-cols-3 gap-x-8">

                                           <div className="agent_name">
                                           <label htmlFor="agent_name" className="text-lg font-bold font-sans">Agent</label><br></br>

                                                  <select name="agent_name"  className="w-full rounded-md my-4">
                                                  {
                                                users.map(user => (
                                                    <option key={user.id} onChange={PropertiesVal} value={addproperties.agent_name}>{user.name}</option>
                                                    ))
                                              }
                                                 </select>

                                           </div>
                                            <div className="properties_type">
                                                <label htmlFor="addproperties" className="text-lg font-bold font-sans">Properties Type</label><br></br>

                                               <select name="properties_type"  className="w-full rounded-md my-4">
                                               {
                                                   properties.map(property => (
                                                    <option key={property.id} className="my-4 rounded-md w-full   bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.properties_type}>{property.properties_categories}</option>
                                                    ))
                                                 }
                                               </select>

                                              </div>

                                              <div className="buy_rent">
                                                   <label htmlFor="buyrent" className="text-lg font-bold font-sans">Buy Rent</label><br></br>
                                                  <select name="buyrent" className="my-4 rounded-md w-full bg-blue-50 outline-none">
                                                      {
                                                         options.map(option => (
                                                           <option key={option.id} onChange={PropertiesVal} value={addproperties.buyrent}>{option.sale_rent}</option>
                                                         ))
                                                      }
                                                  </select>
                                               </div>

                                              <div className="properties">
                                                <label htmlFor="addproperties" className="text-lg font-bold font-sans">Number of Bedrooms</label><br></br>
                                                <input type="text" name="addproperties" required className="my-4 rounded-md w-full  bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.addproperties}/>
                                              </div>

                                              <div className="bathroom">
                                                <label htmlFor="bathroom" className="text-lg font-bold font-sans">Number of Bathrooms</label><br></br>
                                                <input type="text" name="bathroom"  required className="my-4 rounded-md w-full  bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.bathroom}/>
                                              </div>

                                               <div className="square-area">
                                                    <label htmlFor="square-area" className="text-lg font-bold font-sans">Square Area</label><br></br>
                                                    <input type="text" name="squarearea" required className="my-4 rounded-md w-full  bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.squarearea} />
                                               </div>

                                               <div className="cooling">
                                                    <label htmlFor="cooling" className="text-lg font-bold font-sans">Cooling</label><br></br>

                                                   <select name="cooling" className="my-4 rounded-md w-full  bg-blue-50 outline-none">
                                                        <option>Select Cooling</option>
                                                        <option value="1" >Yes</option>
                                                        <option value="0" >No</option>
                                                   </select>
                                               </div>
                                               <div className="heating">
                                                   <label htmlFor="heating" className="text-lg font-bold font-sans">Heating</label><br></br>
                                                   <select name="heating" className="my-4 rounded-md w-full  bg-blue-50 outline-none" value={addproperties.heating} onChange={PropertiesVal}>
                                                        <option>Select Heating</option>
                                                        <option value="1">Yes</option>
                                                        <option value="0" >No</option>
                                                   </select>
                                               </div>

                                               <div className="parking-areas">
                                                   <label htmlFor="parkingareas" className="text-lg font-bold font-sans">Parking Areas</label><br></br>
                                                    <input type="text" name="parking_areas" required className="my-4 rounded-md w-full bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.parking_areas}  />
                                               </div>

                                               <div className="deposit_fees">
                                                   <label htmlFor="deposit_fees" className="text-lg font-bold font-sans">Deposit Fee</label><br></br>
                                                    <input type="text" name="deposit_fees" required className="my-4 rounded-md w-full bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.deposit_fees} />
                                               </div>

                                               <div className="location">
                                                   <label htmlFor="location" className="text-lg font-bold font-sans">Location</label><br></br>
                                                   <input type="text" name="location" required className="my-4 rounded-md w-full bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.location} />
                                               </div>

                                               <div className="built_year">
                                                   <label htmlFor="built_year" className="text-lg font-bold font-sans">Year Built</label><br></br>
                                                   <input type="text" name="built_year" required className="my-4 rounded-md w-full bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.built_year} />
                                               </div>

                                               <div className="total_area">
                                                   <label htmlFor="total_area" className="text-lg font-bold font-sans">Total Area</label><br></br>
                                                   <input type="text" name="total_area" required className="my-4 rounded-md w-full bg-blue-50 outline-none" onChange={PropertiesVal} value={addproperties.total_area} />
                                               </div>


                                               <div className="active">
                                                   <label htmlFor="active" className="text-lg font-bold font-sans">Status</label><br></br>
                                                  <select name="active" className="my-4 rounded-md w-full bg-blue-50 outline-none " value={addproperties.active} onChange={PropertiesVal} >
                                                       <option>Select Active</option>
                                                       <option value="1">Active</option>
                                                       <option value="2">Inactive</option>

                                                  </select>
                                               </div>

                                          </div>

                                          <div className="add_image">
                                             <label htmlFor="image" className="text-lg font-bold font-sans">Add Image</label><br></br>
                                              <input type="file" name="image" required className="my-4 rounded-md p-2 bg-blue-50 outline-none w-[35%]" onChange={PropertiesVal} value={addproperties.image} />
                                          </div>

                                          <div className="add_description mb-4">
                                               <label htmlFor="add_description" className="text-lg font-bold font-sans">Add Description</label><br></br>
                                               <textarea name="add_description" className="my-4 rounded-md bg-blue-50 outline-none w-full" id="editor" onChange={PropertiesVal} value={addproperties.add_description}></textarea>
                                          </div>

                                          <div className="submit-button flex gap-x-4">
                                                <button className="bg-green-700 text-lg font-bold py-2 px-2 text-white rounded-md">Add Properties</button> <Link href={route('add-properites.index')} aria-label="cancel" className="bg-red-700 text-lg font-bold py-2 px-5 text-white rounded-md" >Cancel</Link>
                                          </div>
                                   </form>
                           </div>
                    </div>
                </div>
            </div>
          </AuthenticatedLayout>

    </div>
  )
}

export default Create
