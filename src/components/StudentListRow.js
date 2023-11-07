import React from 'react'
import Axios from "axios";
import { Link } from "react-router-dom";


export default function StudentListRow(props) 
{
    const {_id,name,email,rollNo} = props.obj;

    const handleClick = () =>{
        Axios.delete("https://user-backend-ozlr.onrender.com/studentRoute/delete-student/"+_id)
        .then((res)=>{
            if(res.status===200)
            {
                alert("Record deleted");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))

    }
    

  return (
    <tr>

        <td>{name}</td>
        <td>{email}</td>
        <td>{rollNo}</td>
        <td class="d-block mx-auto">
            <button class="btn btn-success m-2">
                <Link to={"/edit-student/"+_id} className="text-light">Edit</Link>
            </button>
            <button onClick={handleClick} class="btn btn-danger m-2">Delete</button>
        </td>
    </tr>
  )
}
