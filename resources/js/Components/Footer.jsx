import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from '@inertiajs/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function footer() {
  return (
    <div>
         <footer>
             <section>
                  <div className='footer max-w-screen-home mx-auto py-12'>
                       <div className='footer_row flex my-8'>
                             <div className='row_one flex gap-x-4 w-[20%]'>
                                 <DraftsIcon className='text-indigo-600' />
                                 <h6 className='font-bold text-2xl text-blue-900'>Estatery</h6>
                             </div>
                             <div className='row_two w-[80%] grid grid-cols-3 gap-6'>
                                   <div className='footer_one'>
                                        <h7 className="text-lg font-bold text-blue-900">SELL A HOME</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Request An Offer'>Request an offer</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Pricing'>Pricing</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Reviews'>Reviews</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Reviews'>Stories</Link></li>
                                        </ul>
                                   </div>

                                   <div className='footer_two'>
                                        <h7 className="text-lg font-bold text-blue-900">BUY, RENT AND SELL</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Buys and sell'>Buys and sell properties</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Rent Home'>Rent Home</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Builder Trade Up'>Builder Trade Up</Link></li>
                                        </ul>
                                   </div>

                                   <div className='footer_three'>
                                        <h7 className="text-lg font-bold text-blue-900">ABOUT</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Company'>Company</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='How it works'>How it works</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Contact'>Contact</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Investors'>Investors</Link></li>
                                        </ul>
                                   </div>

                                   <div className='footer_four'>
                                        <h7 className="text-lg font-bold text-blue-900">BUY</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Buy'>Buy</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Finance'>Finance</Link></li>
                                        </ul>
                                   </div>

                                   <div className='footer_five'>
                                        <h7 className="text-lg font-bold text-blue-900">TERMS & PRIVACY</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Trust'>Trust & Safety</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Privacy Policy'>Privacy Policy</Link></li>
                                        </ul>
                                   </div>

                                   <div className='footer_six'>
                                        <h7 className="text-lg font-bold text-blue-900">RESOURCES</h7>
                                        <ul>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Blog'>Blog</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Guides'>Guides</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Faq'>FAQ</Link></li>
                                            <li><Link href='' className='text-lg text-slate-400 font-sans' aria-label='Help Center'>Help Center</Link></li>
                                        </ul>
                                   </div>

                             </div>
                       </div>

                       <div className='footer_bottom border-t '>
                            <div className='fotter_copyrights flex justify-between my-8'>
                                <div>
                                    <p className='text-slate-400 text-lg font-medium'>2024 @ Estatery. All rights reserved</p>
                                </div>
                                <div className='flex gap-x-4'>
                                    <FacebookIcon className='text-slate-400' />
                                    <TwitterIcon   className='text-slate-400' />
                                    <InstagramIcon  className='text-slate-400' />
                                    <LinkedInIcon  className='text-slate-400' />
                                </div>
                            </div>
                       </div>
                  </div>
             </section>
         </footer>
    </div>
  )
}

export default footer
