// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <div className='h-screen flex flex-col md:block'>
        <Navbar/>
        <HeroSection />
      </div>
    </>
  )

}

export default App
