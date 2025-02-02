import "./Component.css"
import logo from "./background-pic.jpg"
import logo2 from "./background-2.png"
import logo3 from "./background3.jpg"

export default function Home(){
    return(
        <>
        <br />
        <center><img id= "background" src={logo} alt="Motivational Picture"/>
        <img id= "background" src={logo2} alt="Motivational Picture"width={450}/>
        <img id= "background" src={logo3} alt="Motivational Picture" width={450}/></center>
        </>
    )
}