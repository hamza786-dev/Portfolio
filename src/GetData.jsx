import { useState,useEffect} from 'react'
import axios from "axios"
const GetData = () => {
    const [msg,setMsg] = useState([])
    const getd = async() =>{
        await axios.get("http://localhost:3000/api/msg")
        .then((res)=>{setMsg(res.data)})
        .catch((err)=>{console.log(err.message)})
    }
    useEffect(()=>{getd()},[])
  return (
    <div>
      {
        msg?.map((v)=>{
            return(
                <>
                  {v.name}
                  <div className="">{v.message}</div>
                </>
            )
        })
      }
    </div>
  )
}

export default GetData
