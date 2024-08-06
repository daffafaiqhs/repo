import arrowIcon from '../assets/tdesign_arrow.svg';
import rocketIllustration from '../assets/rocket.png'

function HeroSection() {

    return (
        <>
            <div className='bg-white mx-3 mb-3 rounded-3xl outline outline-1 outline-gray-light'>
                <div className="flex flex-col gap-5 justify-between">
                    <div className='px-3 pt-6'>
                        <div className=''>
                            <div className="flex flex-row gap-1">
                                <h1 className="text-6xl font-[360]">Coding</h1>
                                <h2 className="text-[9px] w-28 font-light content-end">Daffa’s 2nd Year Informatics Student's Portfolio</h2>
                            </div>
                            <h1 className="text-6xl font-[660] top-14">Tommorow's</h1>
                            <div className="flex flex-row items-center gap-4 ms-5">
                                <div className="rounded-lg w-6 h-9 bg-gradient-to-b from-primary-orange to-secondary-yellow" />
                                <h2 className="text-6xl font-[300] top-28">Web <span className="text-6xl font-[660] top-14">Today</span> </h2>
                            </div>
                        </div>
                        <div className="py-2 outline outline-1 rounded-3xl mt-10 mb-6">
                            <a href="" className='flex justify-center gap-2'>
                                <img src={arrowIcon} alt="Arrow Icon" />
                                <p className="text-[9px]">Who is Daffa Faiq?</p>
                            </a>
                        </div>
                    </div>
                    <div className='pt-3'>
                        <img src={rocketIllustration} alt="Rocket Illustration"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection