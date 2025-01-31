import Form from "./Components/Form";
import Header from "./Components/Header";
import { Route,Routes } from "react-router-dom";
import Result from "./Components/Result";




export default function App(){
  return(
    <>
<Header/>
<Routes>
        <Route element={<Form />} path={"/form"} />
        <Route element={<Result />} path={"/entries"} />
      </Routes>

    </>
  )
}