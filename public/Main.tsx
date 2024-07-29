import React from 'react'



const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen h-full w-full p-3 md:p-10 md:space-y-10 space-y-5'>
        <div className=' flex flex-col text-center xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl max-w-lg md:space-y-5 space-y-2'>
          <h1 className=' font-extrabold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>Streamline Your Psychological Practice</h1>
          <p className=' xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm'>Serenity is a comprehensive SaaS platform designed to simplify and enhance the workflow of psychologists and mental health professionals.</p>
        </div>
        <button className=' bg-black text-white rounded-lg px-3 py-1 md:text-xl text-sm md:px-6 md:py-2'>
          Get Started
        </button>
    </div>
  )
}

export default Home