import React, { memo } from 'react'
import './Home.scss'
import { Service, abbosali, abbosbek, logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
import Platformsweworkwith from './Platformsweworkwith'
import Footer from '../../components/footer/Footer'
import Login from './Login'
const Home = () => {
    return (
        <>
            <div className='full'>
                <div className="container">
                    <div className='head'>
                        <header className="text-gray-400  body-font">
                            <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
                                <div className='loloni'>
                                    <img className='lolo w-[250px] flex justify-start' src={Service} alt="" />
                                </div>

                                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                                    <NavLink to='/'><a className="mr-5 hover:text-white">Home</a></NavLink>
                                    <NavLink to='/aboutus'><a className="mr-5 hover:text-white">About us</a></NavLink>
                                    <NavLink to='/register'><a className="mr-5 hover:text-white">Register</a></NavLink>
                                </nav>

                            </div>
                        </header>

                        <section className="section1 text-gray-400 mt-40  body-font">
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="div1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">Before they sold out
                                        <br className="hidden lg:inline-block" />readymade gluten
                                    </h1>
                                    <p className="pp1 mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed                                         <br className="hidden lg:inline-block" /> tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken                                         <br className="hidden lg:inline-block" /> authentic tumeric truffaut hexagon try-hard chambray.</p>
                                    <div className="flex justify-center">
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get More</button>

                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <Platformsweworkwith />
            <Login />
            <Footer />
        </>
    )
}

export default memo(Home)