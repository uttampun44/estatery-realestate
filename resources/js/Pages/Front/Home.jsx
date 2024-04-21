import Header from '../../Components/Header'

function Home() {
  return (
    <div>
          <Header />
          <main>
          <section className="hero-section relative bg-[url('/home/uttam/Desktop/projects/estatery/public/images/map.jpeg')] bg-cover bg-no-repeat">
          <div className='hero-transparent after:absolute inset-0 after:opacity-50 after:content-[""] after:bg-slate-400 after:w-full after:h-full'></div>
          <div className='overlary-half after:absolute after:content-[""] after:bg-indigo-50 after:w-[50%] after:h-full'></div>
               <div className='hero-container mx-auto max-w-screen-home'>

                     <div className='flex py-16 relative z-10'>
                          <div className='row-one'>
                              <h1 className='text-blue-900 text-5xl font-bold'>Buy, rent, or sell your<br></br> property your property <br></br>easily</h1>
                              <p className='text-slate-700 text-base font-medium'>A great platform to buy,sell or event rent your<br></br> properties without any comissions</p>
                          </div>
                          <div className='row-two'>

                          </div>
                     </div>
                 </div>
          </section>
          </main>
    </div>
  )
}

export default Home
