import Header from '../../Components/Header';
import Homeimage from '../../../../public/images/homesale.webp'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HomeTwo  from '../../../../public/images/hero-two.webp';
import { Link } from '@inertiajs/react';
import Virtual from '../../../../public/images/homsalet_wo.jpg'
import YouTubeIcon from '@mui/icons-material/YouTube';
import HouseIcon from '@mui/icons-material/House';



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
                                 <Link>
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
                                       </Link>

                                       <div className='two'>

                                       </div>

                                       <div className='three'>

                                       </div>

                                       <div className='four bg-white'>
                                          <Link>
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
                                            </Link>
                                       </div>
                               </div>
                          </div>
                     </div>
                 </div>
          </section>
          <section className='virtual-tour my-12 px-4 bg-white relative'>
              <div className='virtual-tour max-w-screen-home mx-auto py-12'>
                     <div className='virtual-tour relative flex items-center gap-x-12'>
                          <div className='virtual-one w-[50%] bg-indigo-100'>
                               <img src={Virtual} className='w-full h-full' />
                               <div className='virtual-description absolute top-[10%] left-[-5%] bg-indigo-100 flex gap-x-4 py-2 px-6 rounded-md'>
                                   <div className='icon rounded-full p-2 bg-white'>
                                      <YouTubeIcon className='text-indigo-600' />
                                   </div>
                                   <div>
                                        <strong className='text-blue-900'>Virtual Tour Home</strong><br></br>
                                        <span>We provide you with virtual tour</span>
                                   </div>
                               </div>

                               <div className='find_the_deal bg-indigo-100 absolute bottom-[-10%] left-[10%] py-2 px-6 rounded-md'>
                                     <HouseIcon  className='text-indigo-600 rounded-full p-1 bg-white relative top-[-20px]'/>
                                     <strong className='text-blue-900'>Find the best deal</strong><br></br>
                                     <span>Browse of thousand of properties</span>
                               </div>
                          </div>

                          <div className='virtual_two my-6 w-[50%]'>
                            <div className='class-row bg-indigo-100 p-3 my-4 flex gap-x-4 w-[60%] rounded-md'>
                                 <span className='text-indigo-600 p-2 border-slate-100 border bg-white active'>For Rentants</span> <span className='text-slate-400 p-2'>For Landlords</span>
                            </div>
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

          {/****  new way to find  *******/}
          <section>
              <div className='mx-auto max-w-screen-home'>

              </div>
          </section>

          {/* **** Based on your location ***** */}
          <section>
               <div className='mx-auto max-w-screen-home'>

               </div>
          </section>

          {/****  Ar you landlords  ****/}

          <section className='bg-blue-900'>
               <div className='mx-auto max-w-screen-home py-12'>
                       <div className='title_landlords text-center'>
                             <span className='text-indigo-400 font-sans text-xl font-bold'>No Spam Promise</span>
                             <h3 className='text-2xl font-bold text-white'>Are you a landlord ?</h3>
                             <p className='text-slate-300 text-lg font-medium mb-4'>Discovery ways to increase your home's value and get listed. No Spam.</p>
                       </div>
                       <form>
                       <div className='email flex justify-center my-4 w-[45%] mx-auto relative'>

                          <input name='email' placeholder='Enter your email address' className='p-3 rounded-md w-full' />
                           <button className='bg-indigo-600 text-white p-2 absolute right-[10px] top-1'>Submit</button>

                       </div>
                       </form>

                       <div className='text-center'>
                           <p className='text-slate-400 text-lg font-medium'>Join <span className='font-bold text-white'>10,000+ </span>others landlords in our estatery community</p>
                       </div>
               </div>
          </section>

          </main>
    </div>
  )
}

export default Home
