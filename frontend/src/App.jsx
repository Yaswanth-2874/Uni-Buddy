import { useState } from 'react'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
  return (
    <>
    <div className='bg-[#1e252b]  w-screen     h-fit flex-col '>
      <Navbar/>
     <Hero/>
    </div>
    </>
  )
}

export default App
