import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head,Link} from "@inertiajs/react";
import Sidebar from '../../Components/Adminsidebar';
import { useState } from "react";
import { Inertia } from '@inertiajs/inertia';

function Addproperties({auth}) {

      const [properties, setProperties] = useState({
         'add_properties' : ''
      });

      const Properties = (event) =>{

         const {name, value} = event.target

         setProperties({...setProperties, [name]:value})
      }

    const  submitProperties = (event) =>{
       event.preventDefault();
      Inertia.post(route('add-properties-category.store'), properties)

    }

  return (
    <div>
          <Sidebar />
          <AuthenticatedLayout user={auth.user} >
          <Head title="Add Properties" />
          <div className="py-12">
                <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       <div className="form">
                               <form onSubmit={submitProperties} method="POST">
                                    <div className="rows-add-properties grid gap-y-5 p-4">
                                          <div className="properties">
                                                <label htmlFor="addproperties" className="text-lg font-bold font-sans">Add Properties</label><br></br>
                                                <input type="text" name="add_properties" placeholder="Add Properties" required className="my-4 rounded-md" id="add_properties" onChange={Properties} value={properties.addproperties} />
                                          </div>
                                          <div className="submit-button flex gap-x-4">
                                                <button className="bg-green-700 text-lg font-bold py-2 px-2 text-white rounded-md" type="submit">Add Properties Category</button> <Link href="/admin/dashboard" aria-label="cancel" className="bg-red-700 text-lg font-bold py-2 px-5 text-white rounded-md" >Cancel</Link>
                                          </div>
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

export default Addproperties
