import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../Main/sign-up/SignUp.js"
import SignIn from "../Main/sign-in/SignIn.js"


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;