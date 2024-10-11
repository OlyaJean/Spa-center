import React from 'react'
import pic1 from './../assets/pic1.jpg'
import pic2 from './../assets/pic2.jpg'
import pic3 from './../assets/pic3.jpg'
import pic4 from './../assets/pic4.jpg'
const Service = () => {
  return (
    <div className='pb-10'>
      <p className='text-sky-200 text-center mb-10 font-bold lg:text-2xl md:text-xl text-sm  mx-10 bg-gray-800 bg-opacity-70 p-4 rounded-xl'>Serenity Heaven Wellness Spa offers vegan-friendly alternatives, cruelty-free product lines, quality services, and an individualized approach to spa treatments.</p>
      <div className='flex flex-col gap-10 items-center xl:flex-row xl:justify-center '>
        <div className='relative group'> 
            <img src={pic1} alt="" loading='lazy' className='h-52 rounded-xl cursor-pointer'/>
            <p className='max-w-[19.5rem] bg-gray-800 opacity-0 p-5 text-center text-sm rounded-lg h-52 absolute bottom-0 font-semibold group-hover:opacity-75 cursor-pointer transition duration-700 ease-in-out text-sky-100'>Kick off ‘peel season’ with this restorative treatment that features Cosmedix Skin Brightening Peel. Transitioning from Summer means clogged pores, cellular buildup, & various damage from sun exposure. This facial will give your skin a fresh start and set you on the path toward a radiant autumn.</p>
        </div>
        <div className='relative group'> 
            <img src={pic2} alt="" loading='lazy' className='h-52 rounded-xl cursor-pointer'/>
            <p className='max-w-[19.5rem] bg-gray-800 text-sky-100 opacity-0 p-5 text-center text-sm rounded-lg h-52 absolute bottom-0 font-semibold group-hover:opacity-75 cursor-pointer transition duration-700 ease-in-out'>Swedish massage is wonderful for muscular tension and stress relief. Swedish massage uses long, gliding movements followed by various techniques of light to deep pressure to relax tense muscles, improve circulation, release toxins, and promote harmony and balance. </p>
        </div>
        <div className='relative group'> 
            <img src={pic4} alt="" loading='lazy' className='h-52 rounded-xl cursor-pointer'/>
            <p className='max-w-[19.5rem] bg-gray-800 text-sky-100 opacity-0 p-5 text-center text-sm rounded-lg h-52 absolute bottom-0 font-semibold group-hover:opacity-75 cursor-pointer transition duration-700 ease-in-out'>Retreat into a private steam shower to begin this purifying treatment. We provide you with a bowl of body scrub to exfoliate from head to toe while steaming. The natural oils and aromatherapy of the body scrub will fill the steamy shower. This DIY steam and scrub combination will leave you with glowing, soft skin.</p>
        </div>
       
        
        
       
      </div>
    </div>
  )
}

export default Service
