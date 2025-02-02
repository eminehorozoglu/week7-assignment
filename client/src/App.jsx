import Form from "./Components/Form";
import Header from "./Components/Header";
import { Route,Routes } from "react-router-dom";
import Result from "./Components/Result";
import "./App.css"
import Home from "./Components/Home";
import Delete from "./Components/Delete";



export default function App(){
  return(
    <>
<Header />

<Routes>
        <Route element={<Header />} path="/"/>
        <Route index element={<Home />} />
        <Route element={<Form />} path={"/form"} style="font-size: 24px" />
        <Route element={<Result />} path={"/entries"} style="font-size: 24px" />
        <Route element={<Delete />} path={"/delete"} style="font-size: 24px" />
      </Routes>
  

    </>
  )
}