import "./Component.css"
import { Link } from "react-router-dom";


export default function Header (){
    return (
<>
<h1 id="header">Daily Mode Tracker</h1>
<div id ="link">
    <Link to={"/"}>HOME</Link> <p></p>
      <Link to={"/form"}>DAIRY FORM</Link> <p></p>
      <Link to={"/entries"}>DIARY ENTRIES</Link>
      </div>

  </>
    )
    
}