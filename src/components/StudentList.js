import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from './StudentListRow';

export default function StudentList() 
{

  const[arr,setArr] = useState([]);

  useEffect(()=>{
    Axios.get("https://user-backend-ozlr.onrender.com/studentRoute/")
    .then((res)=>{
      if(res.status === 200)
      {
        setArr(res.data);
        console.log(res.data);
      }
      else{
        Promise.reject();
      }
    })
    .catch((err)=>alert(err));
  },[])



  const ListItems = () =>{
    return arr.map((val,ind)=>{
      return <StudentListRow obj={val}/>
    })
  }


  return (
    <table style={{maxWidth:"60%",margin:"50px auto"}} className="table table-bordered table-striped table-success">
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Email</th>
          <th class="text-center">Roll Number</th>
          <th class="text-center">Action </th>
        </tr>

      </thead>
      <tbody>
      {ListItems()}

      </tbody>

    </table>
  )
}
