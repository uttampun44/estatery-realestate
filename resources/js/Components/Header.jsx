import { Link } from '@inertiajs/react'
import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import MenuIcon from '@mui/icons-material/Menu';

function header() {
  return (
    <header>
         <div className='max-w-screen-home mx-auto'>
               <div className='header-row flex justify-between items-center p-4'>
                        <div className='flex items-center gap-x-4'>
                          <DraftsIcon className='text-indigo-400 text-xl' /> <span className='text-2xl font-bold font-sans'>Estatery</span>
                        </div>
                        <div className='rent-buy max-lg:hidden'>
                            <nav>
                                <ul className='flex gap-x-8'>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-medium font-sans' >Rent</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-medium font-sans' >Buy</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-medium font-sans' >Sell</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-medium font-sans' >Manage Properties</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-medium font-sans' >Resource</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='login-singup flex gap-x-4 max-lg:hidden'>
                             <div className='login border cursor-pointer border-slate-400 py-2 px-6'>
                                 <Link href='/login' aria-label='Login' className='text-lg font-bold'>Login</Link>
                             </div>
                             <div className='signup singup_active cursor-pointer bg-indigo-600 text-white py-2 px-6 rounded-md'>
                                  <Link aria-label='Signup' className='text-lg font-bold'>Signup</Link>
                             </div>
                        </div>

                        <div className='hamburger-menu lg:hidden'>
                             <MenuIcon className='text-indigo-600' />
                        </div>
               </div>
         </div>
    </header>
  )
}

export default header
