import React from 'react'
import Hero from './components/Hero'
import Service from './components/Service'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className=' w-[100vw] flex flex-col gap-10 justify-center mx-auto bg-hero bg-cover bg-fixed'>
      <Navbar/>
      <Hero/>
      <Service/>
    </div>
  )
}

export default App
