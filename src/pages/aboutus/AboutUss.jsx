import React from 'react'
import { Service, abbosali, clock, logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
import './AboutUs.scss'
const AboutUss = () => {
    return (
        <div className='abouttruck'>
            <div className="container">
                <div className='sunami pt-20'>
                    <header className="text-gray-400  body-font">
                        <div className="container  flex flex-wrap  flex-col md:flex-row items-center">
                            <a className="flex title-font  items-start font-medium  text-white mb-4 md:mb-0">
                                <img className='w-[250px]  items-start' src={Service} alt="" />
                            </a>
                            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                                <NavLink to='/'><a className="mr-5 hover:text-white">Home</a></NavLink>
                                <NavLink to='/aboutus'><a className="mr-5 hover:text-white">About us</a></NavLink>
                                <NavLink to='/register'><a className="mr-5 hover:text-white">Register</a></NavLink>
                            </nav>

                        </div>
                    </header>

                    <div className="aboutuss">

                        <section className="text-gray-400 body-font ">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap w-full mb-20">

                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"></p>
                                </div>
                                <div className="flex flex-wrap -m-4 mt-10">
                                    <div className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
                                            <h2 className="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2>
                                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
                                            <h2 className="text-lg text-white font-medium title-font mb-4">Colosseum Roma</h2>
                                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
                                            <h2 className="text-lg text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
                                            <h2 className="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
                                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUss