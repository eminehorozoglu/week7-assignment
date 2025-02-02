//Form degerlerini tek tek atamak icin kullanilan kod
import "./Component.css"
import logo from "./motivational-pic.jpg"

import { useState } from "react"
export default function Form(){

const [FormValues,setFormValues]=useState(
        {
            date:"",
            moodchoice:"",
            dailysentence:"",
            dailynote:"",
          
        }
    );


  function handleChangeFormValues(event){
    setFormValues({...FormValues, [event.target.name] : event.target.value,});
  
} 

function handleSubmit (event){
    event.preventDefault();
    fetch("http://localhost:8080/new-data", {
        method: "POST",
       
        headers: {
          "Content-Type": "application/json",
        },
     
        body: JSON.stringify({FormValues}),
    
      });
      console.log(FormValues);
      setTimeout(FormValues.onsubmit = function(){
        alert("Your registration has been submitted successfully.!")
         location.reload(true);
     })

}

return(
    <>
    <br />
    <form onSubmit={handleSubmit} id="moodform">
   <label htmlFor="username">Date :</label>
   <input type="date"
   id ="date" 
   name="date" 
   value={FormValues.date}
    required onChange={handleChangeFormValues}/> <br />
   <label htmlFor="moodchoice">Mode:</label>
<input list="Text" id="moodchoice" name="moodchoice" placeholder="Enter your mode..."value={FormValues.moodchoice}
  onChange={handleChangeFormValues}/>
  
 <br />



   <label htmlFor="dailysentence">Daily Motivational Sentence:</label>
    <textarea id="dailysentence" name="dailysentence"  rows="3" cols="60" value={FormValues.dailysentence}
  onChange={handleChangeFormValues} /> <br />
  <label htmlFor="dailynote">Daily Note:</label>
    <textarea id="dailynote" name="dailynote"  rows="3" cols="60" value={FormValues.dailynote}
  onChange={handleChangeFormValues} /> 
  <button type="submit" id="SubmitButton">Submit</button>
    </form> 
<center><img src={logo} alt="Motivational Picture" id="formlogo" height={290}/></center>
    </>
)
}
