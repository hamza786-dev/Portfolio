import React from 'react';
import img2 from './Assets/img3.png';
import Tabs from './Tabs';

function About() {
    return (
        <>
            <div className='flex flex-col items-center px-4 py-24 md:flex-row md:justify-center md:px-8 lg:px-16 bg-gradient-to-t from-[#36454f] to-black '>
                <div className='mb-6 md:mb-0 md:mr-8 w-96'>
                    <img src={img2} alt="About Me" className='w-full max-w-xs md:max-w-md lg:max-w-lg border-2 border-black rounded-3xl bg-[white] ' />
                </div>

                <div className='flex flex-col items-start md:w-1/2 -mt-26'>
                    <div className='ml-52'>
                        <h1 className='text-2xl font-extrabold mb-4 md:text-3xl lg:text-4xl text-white'>About Me</h1>
                    </div>
                    <div className='text-base text-gray-700 mb-4 text-white text-justify'>
                        <p>I am a Full Stack Web Developer skilled in React JS, Node JS, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and MongoDB. I build professional websites, including portfolios, blogs, and eCommerce platforms with admin panels. If you need your design converted into a fully functional website, let’s collaborate!</p>
                    </div>
                    <Tabs />
                </div>
            </div>
        </>
    );
}

export default About;