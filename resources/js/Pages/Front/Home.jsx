import Header from '../../Components/Header';
import Homeimage from '../../../../public/images/homesale.webp'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HomeTwo  from '../../../../public/images/hero-two.webp';
import { Link } from '@inertiajs/react';
import Virtual from '../../../../public/images/homsalet_wo.jpg'


function Home() {
  return (
    <div>
          <Header />
          <main>
          <section className="hero-section relative bg-[url('/home/uttam/Desktop/projects/estatery/public/images/map.jpeg')] bg-cover bg-no-repeat">
          <div className='hero-transparent after:absolute inset-0 after:opacity-80 after:content-[""] after:bg-slate-400 after:w-full after:h-full'></div>
          <div className='overlary-half after:absolute after:content-[""] after:bg-indigo-50 after:w-[50%] after:h-full'></div>
               <div className='hero-container mx-auto max-w-screen-home'>

                     <div className='flex py-16 relative z-10'>
                          <div className='row-one w-[50%]'>
                              <h1 className='text-blue-900 text-5xl font-bold lg:leading-[55px]'>Buy, rent, or sell your<br></br> property your property <br></br>easily</h1>
                              <p className='text-slate-700 text-base font-medium my-12'>A great platform to buy,sell or event rent your<br></br> properties without any comissions</p>
                              <div className='rent-properties flex gap-x-8'>
                                      <div className='renters border-l-2 pl-4'>
                                           <span className='text-lg font-semibold text-indigo-600'>50k+</span><br></br>
                                           <span className='text-base text-slate-600'>Renters</span>
                                      </div>
                                      <div className='properties border-l-2 pl-4'>
                                          <span className='text-lg font-semibold text-indigo-600'>50k+</span><br></br>
                                          <span className='text-base text-slate-600'>Properties</span>
                                      </div>
                              </div>
                              <div className='buy_sale_properties absolute bg-white p-3 rounded-md my-10'>
                                             <div className='link flex gap-x-4'>
                                                  <Link className='text-slate-400'>Rent</Link>
                                                  <Link className='text-slate-400'>Buy</Link>
                                                  <Link className='text-slate-400'>Sell</Link>
                                             </div>

                                             <div className='location flex gap-x-8'>
                                                   <div className='locations'>
                                                      <span>Location</span><br></br>
                                                      <span>Barcelona</span>
                                                   </div>
                                                    <div>
                                                         <Link >Browse Properties</Link>
                                                    </div>
                                             </div>

                                      </div>
                          </div>
                          <div className='row-two w-[50%] p-4'>
                               <div className='row-two-grid grid grid-cols-2 gap-x-12'>
                                       <div className='home-grid-one  bg-white '>
                                            <img src={Homeimage} />
                                            <div className='description p-3 border-b-2'>
                                               <span className='text-indigo-600'>$ 2,700</span><span className='text-slate-400'>/ month</span>
                                               <h6 className='text-lg font-semibold'>Beverly springfield</h6>
                                               <span className='text-slate-400 font-normal'>2821 Lake Sevilla, Plain Harbour </span>
                                            </div>

                                            <div className='description-two p-3 flex gap-x-4'>
                                               <div className='bedicon'>
                                                 <BedIcon className='text-indigo-400'/><span>4</span>
                                               </div>
                                               <div className='bathtub'>
                                                    <BathtubIcon className='text-indigo-400'  /><span>6</span>
                                               </div>
                                               <div className='landscape'>
                                                    <LandscapeIcon className='text-indigo-400' /><span>4,300</span>
                                               </div>
                                            </div>
                                       </div>

                                       <div className='two'>

                                       </div>

                                       <div className='three'>

                                       </div>

                                       <div className='four bg-white'>
                                              <img src={HomeTwo} />

                                              <div className='description p-3 border-b-2'>
                                               <span className='text-indigo-600'>$ 2,700</span><span className='text-slate-400'>/ month</span>
                                               <h6 className='text-lg font-semibold'>Beverly springfield</h6>
                                               <span className='text-slate-400 font-normal'>2821 Lake Sevilla, Plain Harbour </span>
                                            </div>

                                            <div className='description-two p-3 flex gap-x-4'>
                                               <div className='bedicon'>
                                                 <BedIcon className='text-indigo-400'/><span>4</span>
                                               </div>
                                               <div className='bathtub'>
                                                    <BathtubIcon className='text-indigo-400'  /><span>6</span>
                                               </div>
                                               <div className='landscape'>
                                                    <LandscapeIcon className='text-indigo-400' /><span>4,300</span>
                                               </div>
                                            </div>
                                       </div>
                               </div>
                          </div>
                     </div>
                 </div>
          </section>
          <section className='virtual-tour py-8 px-4 bg-white'>
              <div className='virtual-tour max-w-screen-home mx-auto py-8'>
                     <div className='virtual-tour flex items-center gap-x-12'>
                          <div className='virtual-one w-[50%]'>
                               <img src={Virtual} className='w-full h-full' />
                               <div className='virtual-description'>

                               </div>
                          </div>

                          <div className='virtual_two my-6 w-[50%]'>
                              <h2 className='text-3xl font-sans font-bold'>We make easy it easy for <br></br> tenants and landlords</h2>
                              <p className='text-slate-400 my-6 text-lg'>Whether it's selling your current home, getting <br></br>
                              financing, or buying new home, we make it easy and <br></br>
                              efficient. The best part? you'll save a bunch of money <br></br>
                              and time with other services.
                              </p>
                              <div className='see-more'>
                                  <Link className='bg-indigo-600 text-white p-3 rounded-md text-lg'>See More</Link>
                              </div>
                          </div>
                     </div>
              </div>
          </section>
          </main>
    </div>
  )
}

export default Home
