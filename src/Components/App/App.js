import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../Main/sign-up/SignUp.js";
import SignIn from "../Main/sign-in/SignIn.js";
import IncomePage from "../Main/income/Income.js";
import UserContext from "../Contexts/UserContext.js";
import ExpensePage from "../Main/expense/Expense.js";
import WalletPage from "../Main/wallet/WalletPage.js";
import UpdateIncome from "../Main/income/UpdateIncome.js";
import UpdateExpense from "../Main/expense/UpdateExpense.js";

function App(){
  const [data, setData] = useState({token:"", user:""});

  return (
    <BrowserRouter>
        <UserContext.Provider value = {{data, setData}}>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/wallet" element={<WalletPage/>}/>
            <Route path ="/income" element={<IncomePage/>}/>
            <Route path="/expense" element={<ExpensePage/>}/>
            <Route path="/update-income" element={<UpdateIncome/>}/>
            <Route path="/update-expense" element={<UpdateExpense/>}/>
          </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;