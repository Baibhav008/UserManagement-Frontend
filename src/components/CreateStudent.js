import React, { useState } from 'react'
import StudentForm from './StudentForm'
import Axios from "axios";

export default function CreateStudent() {


    //call back to pass data----------------------
    const [arr,setArr]=useState([])
    const getState = (childData) =>{
        setArr(childData);

    }
    //--------------------------------------------


    //AXIOS POST------------------------------------

    const handleSubmit=()=>{

        const data={name: arr[0],email:arr[1],rollNo:arr[2]}
        Axios.post("https://user-backend-ozlr.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record Added");
            }
            else{
                Promise.reject();
            }

        })
        .catch((err)=>alert(err));

    }

    //----------------------------------------------

  return (
    <form onSubmit={handleSubmit}>
        <StudentForm getState={getState} nameValue="" emailValue=""
                rollNoValue="">
            Create Student
        </StudentForm>

    </form>

  )
}
