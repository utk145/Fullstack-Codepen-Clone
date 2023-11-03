import React, { useState } from 'react'
import AuthInput from './AuthInput'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SigningUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordField, setIsPasswordField] = useState(true);
    const [getIsEmailValidStatus, setgetIsEmailValidStatus] = useState(false); // Based on this only we'll proceed to login
    const [isTobeLogin, setIsTobeLogin] = useState(false);

    // console.log("getIsEmailValidStatus is "+getIsEmailValidStatus);

    return (
        <div className='text-[#868CA0] w-full py-6'>
            <div className='w-full flex flex-col items-center justify-center py-8 '>
                <p className='py-6 text-2xl opacity-95 font-semibold'>The Best Developer Community to <span className='text-white'>JOIN</span>⚡</p>
                <div className="px-8 py-4 w-full md:w-auto bg-[#2f3181] rounded-lg shadow-md flex flex-col items-center justify-center gap-5">
                    {/* Signup Form */}

                    {/* Email */}
                    <AuthInput what="Email" isPasswordField={false} key={"foremail"} setStateFxn={setEmail} setgetIsEmailValidStatus={setgetIsEmailValidStatus} />

                    {/* Password */}
                    <AuthInput what="Password" isPasswordField={isPasswordField} key={"forpass"} setStateFxn={setPassword} />

                    {/* Alert */}

                    {/* Login button  */}
                    {isTobeLogin ?
                        <motion.div whileTap={{ scale: 0.8 }} className='w-full flex py-3 items-center justify-center bg-[rgb(32,172,248)] rounded-lg cursor-pointer'>
                            <span className='text-white text-xl'>Login</span>
                        </motion.div>
                        :
                        <motion.div whileTap={{ scale: 0.8 }} className='w-full flex py-3 items-center justify-center bg-[rgb(32,172,248)] rounded-lg cursor-pointer'>
                            <span className='text-white text-xl'>Signup</span>
                        </motion.div>
                    }

                    <p className='text-md flex gap-3 items-center justify-center'>{!isTobeLogin ? `Already have an account?` : `Don't have an account?`} <span className='text-white cursor-pointer' onClick={() => setIsTobeLogin(!isTobeLogin)}>{!isTobeLogin ? `Login here.` : `Create now.`}</span> </p>


                    {/* Signin with google  */}


                    {/* Signin with github  */}


                </div>
            </div>
        </div>
    )
}

export default SigningUp
