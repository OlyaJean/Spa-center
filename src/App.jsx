import React from 'react'
import Hero from './components/Hero'
import Service from './components/Service'
import Navbar from './components/Navbar'
import Membership from './components/Membership'
import Address from './components/Address'

const App = () => {
  return (
    <div className=' w-[100vw] flex flex-col justify-center mx-auto bg-hero bg-cover bg-fixed'>
      <Navbar/>
      <Hero/>
      <Service/>
      <Membership/>
      <Address/>
    </div>
  )
}

export default App
