import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.scss"
const Login = () => {
    return (
        <div className='login'>
            <div className="container">
                <section className="section2 text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="hhh1 flex-grow sm:pr-16 text-3xl font-medium title-font text-white-1000">If you are an owner operator, company driver,  or transportation company in the U.S and would like to receive high quality ELD support, then leave your details and we will contact  you as soon as possible</h1>
                            <NavLink to='/register'> <button className="hhh11 flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Register</button></NavLink>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Login