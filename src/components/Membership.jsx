import React from 'react'

const Membership = () => {
  return (
    <div className='flex
     bg-gray-800 bg-opacity-80 w-[75%] rounded-xl m-auto h-96 my-5 md:my-10 justify-around'>
      <div className='w-[50%] mx-10 text-center my-10 text-lg md:text-3xl text-sky-300 '>Member benefits: <hr /></div>
      <div className='flex flex-col justify-end mb-10 mr-10 text-sm sm:text-base md:text-lg text-zinc-300'>
        <ul>
            <li>&#9866; Unlimited entry to our ECO SPA year round.</li>
            <li>&#9866; Unlimited hours of visit.</li>
            <li>&#9866; Dedicated Members-only Check-in lane.</li>
            <li>&#9866; Unlimited access to Birch & Oak Private Club (Members are allowed to bring up to 2 guests).</li>
            <li>&#9866; Access to the only smoking terrace within ECO SPA.</li>
        </ul>
        <button className='rounded-xl w-32 h-10 mt-5 mx-auto text-sky-200 cursor-pointer border-2 shadow-xl border-slate-600 active:shadow-inner text-base'>register</button>
     </div>
    </div>
  )
}

export default Membership
