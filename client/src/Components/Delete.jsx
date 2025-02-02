
import DeleteList from "./DeleteList";

import { useState } from "react"
export default function Delete(){

const [FormValues,setFormValues]=useState(
        {
           id:"", 
           staff_name:"",
           staff_role:"",
           productivity_rating:"",
           department:"",
           ai_replaced:"",
        }
    );


  function handleChangeFormValues(event){
    setFormValues({...FormValues, [event.target.name] : event.target.value,});
    console.log (event.target.value);
  
} 

function handleSubmit (event){
    event.preventDefault();
    fetch("https://week7-assignment-server-sj1z.onrender.com/delete-data", {
        method: "DELETE",
       
        headers: {
          "Content-Type": "application/json",
        },
     
        body: JSON.stringify({FormValues}),
    
      });
      console.log(FormValues);
      setTimeout(FormValues.onsubmit = function(){
        alert("Your request submitted and your data deleted.!")
        location.reload(true);
     })

}
return (
    <>
    <br />
    <center>
     <form id="formid" onSubmit={handleSubmit}>
     <label htmlFor="number">PLEASE ENTER THE ID NUMBER OF THE DATA YOU WANT TO DELETE</label>
   <input type="number"
   id ="id" 
   name="id" 
   value={FormValues.id} onChange={handleChangeFormValues} required/>
   <button type="submit" id="SubmitButton">Delete</button>
    </form>
    </center>
    <DeleteList/>
    </>
)

    }
