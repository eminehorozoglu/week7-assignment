import "./Component.css"
import { Link, Outlet } from "react-router-dom";


export default function Header (){
    return (
<>
<h1 id="header">Daily Mode Tracker</h1>
<div id ="link">
<Link to={"/"}>HOME</Link>
      <Link to={"/form"}>DAIRY FORM</Link>
      <Link to={"/entries"}>DIARY ENTRIES</Link>
      <Link to={"/delete"}>DELETE DIARY ENTRIES</Link>
      <Outlet />
      </div>

  </>
    )
    
}