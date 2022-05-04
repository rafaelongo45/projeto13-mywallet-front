import SignUp from "../Main/sign-up/SignUp.js";
import SignIn from "../Main/sign-in/SignIn.js";
import IncomePage from "../Main/income/Income.js";
import ExpensePage from "../Main/expense/Expense.js";
import WalletPage from "../Main/wallet/WalletPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/wallet" element={<WalletPage/>}/>
        <Route path ="/income" element={<IncomePage/>}/>
        <Route path="/expense" element={<ExpensePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;