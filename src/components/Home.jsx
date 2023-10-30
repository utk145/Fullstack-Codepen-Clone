import React, { useState } from 'react'
import { motion } from "framer-motion"

const Home = () => {

    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <>
            <div className={`${showSideMenu ? "w-3" : "flex-[.2] xl:flex-[.2]"} min-h-screen bg-[#1E1F26] max-h-screen relative px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all ease-in-out duration-200`}>


                <motion.div whileTap={{ scale: 0.8 }} onClick={() => setShowSideMenu(!showSideMenu)} className="w-8 h-8 bg-[#1E1F26]  absolute -right-6 rounded-tr-lg rounded-br-lg flex items-center justify-center cursor-pointer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg>
                </motion.div>


            </div>
            <div></div>
        </>
    )
}

export default Home