import {useState} from 'react'
import axios from "axios"
const Contactus = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const save = async (e)=>{
        e.preventDefault();


        await axios.post("http://localhost:3000/api/msg",
            {name,email,message}
        )
        .then((res)=>{console.log(res.data)})
        .catch((err)=>{console.log(err.message)})
    }
  return (
    <>
    <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-bold text-blue-400 mb-6">Contact Us</h4>
          <form className="flex flex-col space-y-4" onSubmit={save}>
            <input
              type="text"
              className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
              onChange={(e)=>{setName(e.target.value)}} value={name}
            />
            <input
              type="email"
              className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
              onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
            <textarea
              className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              required
              onChange={(e)=>{setMessage(e.target.value)}} value={message}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
    </>
  )
}

export default Contactus
