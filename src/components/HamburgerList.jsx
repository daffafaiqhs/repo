function HamburgerList({ isVisible }) {

    return (
        <div className='absolute w-full z-0 top-0'>
            <div className={`hamburger-list ${isVisible ? 'hamburger-list--show' : ''} md:hidden`}>
                <div className="bg-white pt-14 pb-4 shadow-lg">
                    <ul className='text-center md:hidden'>
                        <li className='hamburger__items hamburger__items--active py-3'>
                            <a href="#">Home</a>
                        </li>
                        <li className='hamburger__items py-3'>
                            <a href="#">About</a>
                        </li>
                        <li className='hamburger__items py-3'>
                            <a href="#">Projects</a>
                        </li>
                        <li className='hamburger__items py-3'>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default HamburgerList