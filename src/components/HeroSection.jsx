import arrowIcon from '../assets/tdesign_arrow.svg';
import rocketIllustration from '../assets/rocket.png'

function HeroSection() {

    return (
        <div className='grow bg-white mx-3 mb-4 rounded-3xl outline outline-1 outline-gray-light px-3 pt-6 flex flex-col justify-between items-center md:items-start md:relative md:px-width-responsive md:pb-12'>
            <div className='w-fit flex flex-col gap-8'>
                <div className='w-fit'>
                    <div className="flex flex-row gap-1">
                        <h1 className="text-title-sm md:text-title-md leading-none font-[360]">Coding</h1>
                        <h2 className="text-subtitle-sm md:text-sm font-light content-end">Daffa’s 2nd Year Informatics <br /> Student's Portfolio</h2>
                    </div>
                    <h1 className="text-title-sm md:text-title-md leading-none font-[660]">Tommorow's</h1>
                    <div className="flex flex-row items-center justify-between">
                        <div className='w-0'></div>
                        <div className="rounded-lg w-title-sm aspect-6/9 bg-gradient-to-b from-primary-orange to-secondary-yellow ms-3" />
                        <h2 className="text-title-sm md:text-title-md leading-none font-[300]">Web <span className="text-title-sm md:text-title-md leading-none font-[660]">Today</span> </h2>
                    </div>
                </div>
                <div className="py-2 outline outline-1 rounded-3xl w-11/12 self-center">
                    <a href="" className='flex justify-center gap-2'>
                        <img src={arrowIcon} alt="Arrow Icon" />
                        <p className="text-subtitle-sm md:text-sm">Who is Daffa Faiq?</p>
                    </a>
                </div>
            </div>
            <div className='flex justify-center pt-5 md:absolute md:bottom-0 md:right-0'>
                <img src={rocketIllustration} alt="Rocket Illustration" className='md:w-img-md'/>
            </div>
        </div>
    )
}

export default HeroSection