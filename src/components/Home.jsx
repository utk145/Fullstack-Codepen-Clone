import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Home = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <>
            <div className={`${showSideMenu ? "w-3" : "flex-[.2] xl:flex-[.2]"} min-h-screen bg-[#1E1F26] max-h-screen relative px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all ease-in-out duration-200`}>


                <motion.div whileTap={{ scale: 0.8 }} onClick={() => setShowSideMenu(!showSideMenu)} className="w-8 h-8 bg-[#1E1F26]  absolute -right-6 rounded-tr-lg rounded-br-lg flex items-center justify-center cursor-pointer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg>
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
                    <Link className="flex gap-3 items-center justify-center" to={"/home/42"}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl text-[#868CA0]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                        <span className='text-[#868CA0] text-xl'>Home</span>
                    </Link>
                    <Link className="flex gap-3 items-center justify-center" to={"https://github.com/utk145/Fullstack-Codepen-Clone"} target="_blank">                        
                        <span className='text-[#868CA0] text-xl italic'>@utk145</span>
                    </Link>
                </div>

            </div>
            <div></div>
        </>
    )
}

export default Home