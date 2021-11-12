import React, { useState } from "react";
import './style.css'
const Passwordcheck = ()=>{
    const [password,setpassword]=useState("");
   let submitHandler=(ele)=>{
        setpassword({password:ele.target.value})
        if(password.length<10){
            alert("less then 10 digits");
        }else{
            alert("login succes")
        }
         
        
    }
    return (<>
    <h1 className="primary">hello muther fucker</h1>
    <h1 className="secondary">hello muther fucker randi ak baccha</h1>
        <form action="" onSubmit={submitHandler}>
            <input type="text" 
                name="password"
                placeholder="enter password"
                value={password}
                onChange={(ele)=>{setpassword(ele.target.value)}}
                 />
                 <button type="submit">submit</button>
        </form>
    
    </>)
}
export default Passwordcheck;