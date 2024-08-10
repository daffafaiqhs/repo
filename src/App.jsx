// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <div className='flex flex-col 3xl:items-center'>
        <div className='min-h-screen flex flex-col'>
          <Navbar/>
          <HeroSection />
        </div>
      </div>
    </>
  )

}

export default App
