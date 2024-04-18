import { Link } from '@inertiajs/react'
import React from 'react'

function header() {
  return (
    <header>
         <div className='max-w-screen-home mx-auto'>
               <div className='header-row flex justify-between p-4'>
                        <div>
                           <img src='' alt=''/> <span className='text-2xl font-bold font-sans'>Estatery</span>
                        </div>
                        <div className='rent-buy'>
                            <nav>
                                <ul className='flex gap-x-4'>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-bold font-sans' >Rent</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-bold font-sans' >Buy</Link></li>
                                    <li><Link href='' aria-label='Rent' className='text-lg font-bold font-sans' >Sell</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='login-singup flex gap-x-4'>
                             <div className='login'>
                                 <Link aria-label='Login'>Login</Link>
                             </div>
                             <div className='signup'>
                                  <Link aria-label='Signup'>Signup</Link>
                             </div>
                        </div>
               </div>
         </div>
    </header>
  )
}

export default header
