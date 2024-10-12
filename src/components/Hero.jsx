import React from 'react'
import leaf from './../assets/leaf.png'

const Hero = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center h-[80vh] mt-20 my-20'>
      <section className='flex flex-col gap-10 bg-gray-800 bg-opacity-70 py-10 w-[80%] rounded-xl'>  
      <h1 className='text-sky-200 font-title1 text-6xl text-center align-center text-rounded '>SERENITY HEAVEN <br /><span className='text-xl'>ECO SPA CENTER</span></h1>
    

      <p className='md:text-sky-300 text-sky-200 text-right font-title w-80 font-bold  ml-auto mr-5'>A tranquil eco-spa designed exclusively for women. Our holistic approach to relaxation combines soothing massages, organic skincare, and refreshing green beverages sourced directly from nature.</p>
      <button className='rounded-xl w-40 h-10 mt-10 text-sky-200 cursor-pointer border-2 shadow-xl border-slate-600 active:shadow-inner mx-auto'>book now</button>

      </section>

     
    </div>
  )
}

export default Hero
