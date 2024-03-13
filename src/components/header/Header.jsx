import React from 'react'
import { logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
// import './FooterandHeader.scss'
const Header = () => {
    return (
        <div className='Header1'>
            <header className="text-gray-400 mt-20 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <NavLink to='/'><a className="mr-5 hover:text-white">Home</a></NavLink>
                        <NavLink to='/aboutus'><a className="mr-5 hover:text-white">About us</a></NavLink>
                        <NavLink to='/register'><a className="mr-5 hover:text-white">Register</a></NavLink>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header