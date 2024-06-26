import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidebar from '../../Components/Adminsidebar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Agentdetails({auth, agentdetails}) {
  return (
    <div>
        <Sidebar />
        <AuthenticatedLayout
            user={auth.user} >
            <Head title="Agent Details - Dashboard" />

            <div className="py-12">
                <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                     <div className='userDetails'>
                        <strong className='text-2xl font-bold font-sans'>Agents Details</strong>
                    </div>
                       <table className='w-full table-auto my-4'>
                           <thead>
                               <tr className='border bg-indigo-500 text-white'>
                                   <th className='border p-2 font-bold text-lg'>S.no</th>
                                   <th className='border p-2 font-bold text-lg'>Name</th>
                                   <th className='border p-2 font-bold text-lg'>Email</th>
                                   <th className='border p-2 font-bold text-lg'>Update</th>
                                   <th className='border p-2 font-bold text-lg'>Delete</th>
                               </tr>
                           </thead>
                           <tbody>
                              {
                                 agentdetails.map((agent, index) => (
                                    <tr key={agent.id} className='text-center border'>
                                        <td className='border p-2'>{index+1}</td>
                                        <td className='border p-2'>{agent.name}</td>
                                        <td className='border p-2'>{agent.email}</td>
                                        <td className='border p-2'><EditNoteIcon className='text-blue-600 text-xl cursor-pointer' /></td>
                                        <td className='border p-2'><DeleteIcon className='text-red-500 tex-xl cursor-pointer' /></td>
                                    </tr>
                                 ))
                              }
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    </div>
  )
}

export default Agentdetails
