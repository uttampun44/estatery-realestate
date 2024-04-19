import { Head,  Link } from "@inertiajs/react";
import Sidebaragent from '../../../Components/Agentsidebar';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Create({auth, users}) {

  return (
    <div>
          <Sidebaragent />
          <AuthenticatedLayout user={auth.user}>
          <Head title="Agent Add Properties" />

          <div className="py-12">
                <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                           <div className="create_properties_agent form p-4">
                                   <form method="POST">
                                          <div className="grid grid-cols-3 gap-x-8">

                                           <div className="position">
                                           <label htmlFor="postion_type" className="text-lg font-bold font-sans">Postion/Role</label><br></br>
                                              {
                                                users.map(user => (
                                                  <select name="postion_role" key={user.id} className="w-full rounded-md my-4">
                                                    <option>{user.name}</option>
                                                 </select>
                                                ))
                                              }
                                           </div>
                                            <div className="properties_type">
                                                <label htmlFor="addproperties" className="text-lg font-bold font-sans">Properties Type</label><br></br>
                                                <input type="text" name="properties_type" required className="my-4 rounded-md w-full  bg-blue-50 outline-none"/>
                                              </div>

                                              <div className="properties">
                                                <label htmlFor="addproperties" className="text-lg font-bold font-sans">Number of Bedrooms</label><br></br>
                                                <input type="text" name="addproperties" required className="my-4 rounded-md w-full  bg-blue-50 outline-none"/>
                                              </div>

                                              <div className="bathroom">
                                                <label htmlFor="bathroom" className="text-lg font-bold font-sans">Number of Bathrooms</label><br></br>
                                                <input type="text" name="bathroom"  required className="my-4 rounded-md w-full  bg-blue-50 outline-none"/>
                                              </div>

                                               <div className="square-area">
                                                    <label htmlFor="square-area" className="text-lg font-bold font-sans">Square Area</label><br></br>
                                                    <input type="text" name="squarearea" required className="my-4 rounded-md w-full  bg-blue-50 outline-none" />
                                               </div>

                                               <div className="cooling">
                                                    <label htmlFor="cooling" className="text-lg font-bold font-sans">Cooling</label><br></br>
                                                    <input type="text" name="cooling" required className="my-4 rounded-md w-full  bg-blue-50 outline-none" />
                                               </div>
                                               <div className="heating">
                                                   <label htmlFor="heating" className="text-lg font-bold font-sans">Heating</label><br></br>
                                                    <input type="text" name="heating" required className="my-4 rounded-md w-full  bg-blue-50 outline-none" />
                                               </div>

                                               <div className="parking-areas">
                                                   <label htmlFor="parkingareas" className="text-lg font-bold font-sans">Parking Areas</label><br></br>
                                                    <input type="text" name="parking_areas" required className="my-4 rounded-md w-full bg-blue-50 outline-none" />
                                               </div>

                                               <div className="deposit_fees">
                                                   <label htmlFor="deposit_fees" className="text-lg font-bold font-sans">Deposit Fee</label><br></br>
                                                    <input type="text" name="deposit_fees" required className="my-4 rounded-md w-full bg-blue-50 outline-none" />
                                               </div>

                                               <div className="location">
                                                   <label htmlFor="location" className="text-lg font-bold font-sans">Location</label><br></br>
                                                   <input type="text" name="deposit_fees" required className="my-4 rounded-md w-full bg-blue-50 outline-none" />
                                               </div>

                                               <div className="built_year">
                                                   <label htmlFor="built_year" className="text-lg font-bold font-sans">Location</label><br></br>
                                                   <input type="text" name="built_year" required className="my-4 rounded-md w-full bg-blue-50 outline-none" />
                                               </div>

                                               <div className="total_area">
                                                   <label htmlFor="total_area" className="text-lg font-bold font-sans">Total Area</label><br></br>
                                                   <input type="text" name="total_area" required className="my-4 rounded-md w-full bg-blue-50 outline-none" />
                                               </div>


                                               <div className="active">
                                                   <label htmlFor="active" className="text-lg font-bold font-sans">Location</label><br></br>
                                                  <select name="active" className="my-4 rounded-md w-full bg-blue-50 outline-none">
                                                       <option value="Active">Active</option>
                                                       <option value="Inactive">Inactive</option>
                                                  </select>
                                               </div>
                                          </div>

                                          <div className="add_image">
                                             <label htmlFor="image" className="text-lg font-bold font-sans">Add Image</label><br></br>
                                              <input type="text" name="image" required className="my-4 rounded-md  bg-blue-50 outline-none w-[35%]"  />
                                          </div>

                                          <div className="add_description">
                                               <label htmlFor="add_description" className="text-lg font-bold font-sans">Add Description</label><br></br>
                                               <textarea name="add_description" className="my-4 rounded-md bg-blue-50 outline-none w-full"></textarea>
                                          </div>

                                          <div className="submit-button flex gap-x-4">
                                                <button className="bg-green-700 text-lg font-bold py-2 px-2 text-white rounded-md">Add Properties</button> <Link href='/agent/dashboard' aria-label="cancel" className="bg-red-700 text-lg font-bold py-2 px-5 text-white rounded-md" >Cancel</Link>
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
