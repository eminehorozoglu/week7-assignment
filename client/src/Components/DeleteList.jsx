import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Component.css";
import DateTime from "react-datetime"


export default function Data() {



  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("Fetching items...");
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://week7-assignment-97qo.onrender.com/mood"
        );
        const data = await response.json();

        console.log("Data fetched successfully!");
        

        setItems(data);
        setMessage(
          `Fetched ${data.length} items successfully!`
        );
      } catch (error) {
        console.error("SIDE EFFECT!!!: Failed to fetch items!");
        setMessage("SIDE EFFECT!!!: Failed to fetch items!");
      }
      
     
    }
    fetchData();
    
        
    

  }, [refreshCount]);

  
   

 

  return(


    <div className = "results-container-delete">
        
         <center>
    <div id = "message">

  
    {

     
      items.map((item)=>    
        <div key = {item.id}>
          <h2>id: {item.id}</h2>
          <h3>{item.date}</h3>
       <p>{item.mood}</p>
       <p> {item.daily_sentence}</p>
       <p id ="p1"> {item.daily_note}</p>
  

      </div>
    
      
    ) 
  
  }
  
  </div>
  </center>
    </div>
  )

 
} 
