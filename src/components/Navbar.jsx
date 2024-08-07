import { useState } from 'react';

import myLogo from '../assets/daffafaiq-logo.svg'
import moonIcon from '../assets/ph_moon.svg'

import './Navbar.css'
import HamburgerList from './HamburgerList.jsx'

import { Squash as HamburgerIcon } from 'hamburger-react'

function Navbar() {
    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            <div className='relative mx-7 xl:mx-12 z-10'>
                <header className='py-1 grid grid-cols-2 grid-rows-1 md:grid-cols-3 items-center'>
                    <a href="#" className='w-fit'>
                        <img src={myLogo} alt="Daffa Faiq logo" />
                    </a>
                    <ul className='navbar justify-self-center hidden md:flex md:flex-row md:gap-3 lg:gap-6'>
                        <li className='navbar__items navbar__items--active'>
                            <a href="#">Home</a>
                        </li>
                        <li className='navbar__items'>
                            <a href="#">About</a>
                        </li>
                        <li className='navbar__items'>
                            <a href="#">Projects</a>
                        </li>
                        <li className='navbar__items'>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div className='justify-self-end'>
                        <div className='md:hidden'>
                            <HamburgerIcon 
                                toggled={isVisible} 
                                toggle={setVisible} 
                                size={24}
                                duration={0.3}
                                rounded
                            />  
                        </div>
                        <img src={moonIcon} alt="Mode Switcher" className='p-2 hidden md:block' />
                    </div>
                </header>
            </div>

            <HamburgerList isVisible={isVisible} />
        </div>
    )

}

export default Navbar