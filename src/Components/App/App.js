import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../Main/sign-up/SignUp.js";
import SignIn from "../Main/sign-in/SignIn.js";
import IncomePage from "../Main/income/Income.js";
import ExpensePage from "../Main/expense/Expense.js";
import WalletPage from "../Main/wallet/WalletPage.js";
import UserContext from "../Contexts/UserContext.js";


function App(){
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
        <UserContext.Provider value = {{token, setToken}}>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/wallet" element={<WalletPage/>}/>
            <Route path ="/income" element={<IncomePage/>}/>
            <Route path="/expense" element={<ExpensePage/>}/>
          </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;