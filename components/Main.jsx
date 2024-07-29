import React from 'react'



const Home = () => {
  return (
    <div className=' flex flex-col px-10 justify-center items-center w-full h-screen mx-auto space-y-10'>
        <div className=' flex flex-col justify-center items-center space-y-5'>
        <h1 className=' xl:text-7xl md:text-5xl text-2xl font-[900] text-center'>Streamline Your Psychological Practice</h1>
        <p className=' text-center max-w-7xl w-full xl:text-2xl md:text-xl '>Serenity is a comprehensive SaaS platform designed to simplify and enhance the workflow of psychologists and mental health professionals.</p>
        </div>
        <button className=' rounded-lg bg-black text-white px-8 py-4'>Get Started</button>
    </div>
  )
}

export default Home