import { Head,  Link } from "@inertiajs/react";
import Sidebaragent from '../../../Components/Agentsidebar';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


import React from 'react'

function Index({auth}) {
  return (
    <div>
         <Sidebaragent />
          <AuthenticatedLayout user={auth.user}>
          <Head title="Add Properties" />

          <div className="py-12">
                <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                     <div className='userDetails flex justify-between'>
                        <strong className='text-2xl font-bold font-sans'>Properties Details</strong>
                        <Link href={route('add-properites.create')} aria-label='add properties categories' className='bg-green-700 py-2 px-6 text-lg font-bold rounded-md text-white'>Add Properties Category</Link>
                    </div>
                       <table className='w-full table-auto my-4'>
                           <thead>
                               <tr className='border bg-indigo-500 text-white'>
                                   <th className='border p-2 font-bold text-lg'>S.no</th>
                                   <th className='border p-2 font-bold text-lg'>Properties Type</th>
                                   <th className='border p-2 font-bold text-lg'>Number Of Bedrooms</th>
                                   <th className='border p-2 font-bold text-lg'>Number Of Bathrooms</th>
                                   <th className='border p-2 font-bold text-lg'>Square</th>
                                   <th className='border p-2 font-bold text-lg'>Cooling Heating</th>
                                   <th className='border p-2 font-bold text-lg'>Parking Areas</th>
                                   <th className='border p-2 font-bold text-lg'>Deposit Fee</th>
                                   <th className='border p-2 font-bold text-lg'>Location</th>
                                   <th className='border p-2 font-bold text-lg'>Year Built</th>
                                   <th className='border p-2 font-bold text-lg'>Total Area</th>
                                   <th className='border p-2 font-bold text-lg'>Status</th>
                                   <th className='border p-2 font-bold text-lg'>Update</th>
                                   <th className='border p-2 font-bold text-lg'>Delete</th>
                               </tr>
                           </thead>
                           <tbody>
                                {/* {
                                properties.map((property, index) => {
                                        return (
                                    <tr key={property.id} className='text-center'>
                                        <td className='border p-2 font-bold text-lg'>{index+1}</td>
                                        <td className='border p-2 font-bold text-lg'>{property.properties_categories}</td>
                                        <td className='border p-2 font-bold text-lg cursor-pointer'><Link href={route('add-properties-category.edit', property.id)} method='get'><EditNoteIcon  /></Link></td>
                                        <td className='border p-2 font-bold text-lg cursor-pointer'><button type='button' onClick={() => Deleteproperties(property.id)}><DeleteIcon /> </button></td>

                                  </tr>
                                 );
                                  })} */}
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
          </AuthenticatedLayout>
    </div>
  )
}

export default Index
