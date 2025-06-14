import React from 'react'
import img1 from "./Assets/phone6.jpeg"
import img2 from "./Assets/phone7.jpeg"
import img3 from "./Assets/phone8.jpeg"
import img4 from "./Assets/hamza.png"

function Portfolio() {
    return (
        <>
            <div className='portfolio'>
                <h1 className='port'>My Work</h1>
                <div className='flex container mx-auto justify-center'>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-w-6xl folio">

                        <div className="contain">
                            <img src={img1} className='ig' />
                            <div className="overlay">
                                <div className="tex">
                                    <h1>Blog Website</h1>
                                    <br />
                                    <p className='detail'>The app that connect you to the <br /> talented people around the world <br /> Download at from playstore or appstore </p>
                                </div>
                            </div>
                        </div>


                        <div className="contain">
                            <img src={img2} className='ig' />
                            <div className="overlay">
                                <div className="tex">
                                    <h1>Portfolio Website</h1>
                                    <br />
                                    <p className='detail'>The app that connect you to the <br /> talented people around the world <br /> Download at from playstore or appstore </p>
                                </div>
                            </div>
                        </div>


                        <div className="contain">
                            <img src={img3} className='ig' />
                            <div className="overlay">
                                <div className="tex">
                                    <h1>E-commerce Website</h1>
                                    <br />
                                    <p className='detail'>The app that connect you to the <br /> talented people around the world <br /> Download at from playstore or appstore </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className='tt'> 
                <div className='pt-10 mb-10 text-white pl-28'>
                <h1 className="text-5xl font-bold text-white">My Certification</h1>
                </div>

                <div className='container grid grid-cols-1 gap-6 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <img src={img4} alt="" />
                </div>
            </div>
        </>
    )
}

export default Portfolio
