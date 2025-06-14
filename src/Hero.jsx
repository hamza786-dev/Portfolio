import React from 'react'
import img1 from './Assets/img1.png'

function Hero() {
    return (
        <>
            <div className="bg-gradient-to-t from-black to-[#36454f] -mt-3">
                <div className="flex flex-wrap justify-around">
                    <div className="w-fit py-44 ">
                        <p className="text-white font-serif font-semibold text-3xl">Mern Developer</p>
                        <div className="flex lg:text-6xl text-sm pt-2">
                            <p className="text-white">Hi, I am</p>
                            <p className="text-red-500 pl-2"> Hamza</p>
                        </div>
                        <p className="text-white text-3xl mt-2">Full Stack Web Developer</p>
                        <p className="text-white text-3xl mt-2">UI/UX Designer</p>
                    </div>
                    <div className=" pt-20 pb-14">
                        <img src={img1} alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero