import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link, Route, Routes } from 'react-router-dom';
import SigningUp from './SigningUp';
import AllProjects from './AllProjects';

const Home = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);
    const [user, setUser] = useState(null); // This will be coming from the redux-toolkit

    return (
        <>

            {/* Left Menu */}
            <div className={`${showSideMenu ? "w-3" : "flex-[.2] xl:flex-[.2]"} min-h-screen bg-[rgba(27,27,83,.8)] max-h-screen relative px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all ease-in-out duration-200`}>


                <motion.div whileTap={{ scale: 0.8 }} onClick={() => setShowSideMenu(!showSideMenu)} className="w-8 h-8 bg-[#0e0e2fcc]  absolute -right-6 rounded-tr-lg rounded-br-lg flex items-center justify-center cursor-pointer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg>
                </motion.div>

                <div className={`overflow-hidden w-full flex flex-col gap-3 ${showSideMenu ? "" : "p-2"} `}>
                    <Link to="/home">
                        <img src="/logo-image-pen.webp" alt="logoImage" className='object-contain w-72 h-auto' />
                    </Link>
                    <Link to={"/create"}>
                        <div className=" py-2 mt-2 flex items-center justify-center border border-gray-500 text-gray-400 rounded-lg hover:border-gray-300 hover:text-gray-300 transition-all">
                            {/* <button>Start Coding</button> WHen having a Link u dont need a button */}
                            Start Coding
                        </div>
                    </Link>
                    {user && (
                        <Link className="flex gap-3 items-center justify-center" to={"/home/allProjects"}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl text-[#868CA0]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                            <span className='text-[#868CA0] text-xl'>Home</span>
                        </Link>
                    )}
                    <Link className="flex gap-3 items-center justify-center" to={"https://github.com/utk145/Fullstack-Codepen-Clone"} target="_blank">
                        <span className='text-[#868CA0] text-xl italic'>@utk145</span>
                    </Link>
                </div>

            </div>

            {/* Right Menu */}
            <div className='flex flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12'>
                <div className="w-full flex items-center justify-between gap-3 ">
                    <div className="flex items-center justify-center w-full bg-[rgba(27,27,83,.8)] px-4 py-3 rounded-2xl gap-3 ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 460 512" className="text-2xl text-[#868CA0] cursor-text" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"></path></svg>
                        <input type="text" className='px-4 py-1 flex-1 text-xl outline-none border-none bg-transparent text-[#868CA0] ' placeholder='Search..' />
                    </div>
                    {!user ? (
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <Link className="flex gap-3 items-center justify-center" to={"/home/auth"}>
                                <span className='text-white text-xl bg-sky-700 px-4 py-2 ml-3 rounded-lg hover:bg-cyan-600'>Signup</span>
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="">
                            <h2>This profile icon to be handled</h2>
                        </div>
                    )}
                </div>
                <div className="w-full">
                    <Routes>
                        <Route path='/*' element={<AllProjects />} />
                        <Route path='/auth' element={<SigningUp />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Home