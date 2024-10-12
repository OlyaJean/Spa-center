import React from 'react'

const Address = () => {
  return (
    <div className='flex flex-col gap-10 mx-auto w-[75%] items-center bg-gray-800 bg-opacity-85 rounded-xl py-10 my-10'>
      <div className='w-[80%] leading-10'>
        <p className='text-sky-300 text-xl md:text-2xl'>Subscribe to
        our newsletter</p>
        <p className='text-zinc-300'>By subscribing to the newsletter, you will always be up to date. Find out about new products, events, and specials.</p>
        <input type="email" placeholder='Enter your e-mail'  className='rounded-xl placeholder:text-center my-5 bg-gray-400 placeholder:text-sky-100'/>
        <button className='rounded-xl w-40 h-10 text-sky-200 cursor-pointer border-2 shadow-xl border-slate-600 active:shadow-inner block mb-5'>subscribe</button>
        <hr />
    </div>

    <div className='w-[80%] leading-10'>
        <p className='text-sky-300 text-xl md:text-2xl'>Visit
        Our Blog</p>
        <p className='text-zinc-300'>Explore our blog to stay updated with the latest fascinating articles on a variety of topics</p>
        <button className='rounded-xl w-40 h-10 text-sky-200 cursor-pointer border-2 shadow-xl border-slate-600 active:shadow-inner block mb-5 mt-5'>discover more</button>
        <hr />
    </div>

    <div className='w-[80%] leading-10'>
        <p className='text-sky-300  text-xl md:text-2xl'>Get in touch with us:</p>
        <p className='text-zinc-300'>
1234 Creek Ave, Brooklyn, NY 11230 <br />
callcenter@wecospa.com <br />
+1 234 567 8901</p>
<hr />
    </div>

    <div className='w-[80%] leading-10 flex gap-5 justify-center items-center text-sky-300 '>
    <i class="fa-brands fa-facebook hover:text-sky-100 cursor-pointer"></i>
    <i class="fa-brands fa-twitter hover:text-sky-100 cursor-pointer"></i>
    <i class="fa-brands fa-instagram hover:text-sky-100 cursor-pointer"></i>
    </div>
    </div>
  )
}

export default Address
