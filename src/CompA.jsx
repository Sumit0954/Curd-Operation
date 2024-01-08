import { useState } from "react";
import axios from "axios";

const CompA = ()=>{
    const data = {
        Name:"",
        Password : ""
    }
   const[Data,setData]= useState(data)



   const CheckData = (e)=>{

    // console.log({Name : "Sumit",Password : 123})
    setData({...Data,[e.target.name]:e.target.value})
   }

   const postData=()=>{
    axios.post("https://jsonplaceholder.typicode.com/users",Data)
    .then((item)=>{console.log(item)})
   }
    return(
        <>
        <label>Name</label><input type="text" placeholder="Enter Your Name" name="Name" onChange={(e)=>CheckData(e)} value={Data.Name}/>
        <label>Password</label><input type="password" placeholder="Enter Your password" name="Password" onChange={(e)=>CheckData(e)} value={Data.Password} />
        <button onClick={()=>postData()}>Click</button>
        </>
    )
}
export default CompA;