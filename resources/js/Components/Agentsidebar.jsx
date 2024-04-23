import { Link } from '@inertiajs/react';
import Logo from '../../../public/images/logo.png'

function Agentsidebar() {
  return (
    <div>
         <div className='sidebar bg-blue-900 fixed h-full px-5 py-8'>
           <div className="logo flex items-center gap-x-4">
               <img src={Logo} alt="logo" className="w-full h-full object-contain" /><span className="text-xl font-bold font-sans text-white">Estatery</span>
           </div>
               <div className="aside my-8">
               <aside>
                     <ul className="grid gap-y-6">
                         <li className="hover:bg-indigo-500 hover:text-white p-2 rounded-md"><Link href="/agent/dashboard" aria-label="Dashboard" className="text-white font-sans font-bold text-xl">Dashboard</Link></li>
                         <li className="hover:bg-indigo-500 hover:text-white p-2 rounded-md"><Link href={route('add-properites.index')} aria-label="Add Properties" className="text-white font-sans font-bold text-xl">Add Properties</Link></li>
                         <li className="hover:bg-indigo-500 hover:text-white p-2 rounded-md"><Link href="" aria-label="Add Properties" className="text-white font-sans font-bold text-xl">Message</Link></li>
                         <li className="hover:bg-indigo-500 hover:text-white p-2 rounded-md"><Link href="" aria-label="Add Properties" className="text-white font-sans font-bold text-xl">Reviews</Link></li>
                         <li className="hover:bg-indigo-500 hover:text-white p-2 rounded-md"><Link href="" aria-label="Properties" className="text-white font-sans font-bold text-xl">Properties</Link></li>
                     </ul>
                </aside>
               </div>
         </div>
    </div>
  )
}

export default Agentsidebar
