import React from 'react'
import tag from "./Assets/tag.svg"
import img from "./Assets/web-development-svgrepo-com.svg"
import img2 from "./Assets/idea-head-svgrepo-com.svg"
import img3 from "./Assets/edit-svgrepo-com.svg"

const Services = () => {
  return (
    <>
      <div className='tt'>
        <div className="pt-10 mb-10 text-white pl-44">
          <h1 className="text-5xl font-bold">My Services</h1>
        </div>


        <div className="container grid grid-cols-1 gap-6 pb-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={tag} alt="Web Design" className="w-16 h-16 mb-4 " />
            <h2 className="mb-4 text-2xl font-bold">Web Design</h2>
            <p className="text-justify text-gray-600">Create stunning, user-friendly websites that are tailored to your specific needs and brand identity.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={img} alt="Web Development" className="w-16 h-16 mb-4 " />
            <h2 className="mb-4 text-2xl font-bold">Web Development</h2>
            <p className="text-justify text-gray-600">Develop high-quality, scalable web applications using the latest technologies and frameworks.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={img2} alt="SEO Optimization" className="w-16 h-16 mb-4 " />
            <h2 className="mb-4 text-2xl font-bold">SEO Optimization</h2>
            <p className="text-justify text-gray-600">Optimize your website to improve its visibility on search engines and attract more organic traffic.</p>
          </div>


          <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF4500] duration-300">
            <img src={img3} alt="Content Writing" className="w-16 h-16 mb-4 " />
            <h2 className="mb-4 text-2xl font-bold">Content Writing</h2>
            <p className="text-justify text-gray-600">Craft compelling content that engages your audience and enhances your brand's voice and message.</p>
          </div>



        </div>
      </div>
    </>
  )
}

export default Services