import axios from "axios";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState, useContext} from "react";

import UserContext from "../../Contexts/UserContext";

function ExpensePage(){
  const navigate = useNavigate();
  const [operation, setOperation] = useState({
    description: "",
    amount: "",
  })
  const {data} = useContext(UserContext);

  function addExpense(event){
    event.preventDefault();

    event.preventDefault();
    let acceptComma = operation.amount.toString().replace(',','.');
    acceptComma = parseFloat(acceptComma);

    const config = {
      headers: {
        "Authorization": `Bearer ${data.token}`
      }
    }

    const promise = axios.post("https://mywallet-b.herokuapp.com/transactions", {
      description: operation.description,
      amount: acceptComma,
      type: "expense"
    }, config)

    promise.then((response) => {
      console.log(response);
      navigate("/wallet");
    });

    promise.catch((error) => {
      alert(error.response.data);
      console.log(error);
    });
  }

  return (
    <>
        <Header>
          <h1>Nova Saída</h1>
        </Header>

        <Form onSubmit={addExpense}>
        <input placeholder="Valor" value={operation.amount} onChange={(e) => setOperation({...operation, amount: e.target.value})}></input>
        <input placeholder="Descrição" value={operation.description} onChange={(e) => setOperation({...operation, description: e.target.value})}></input>
        <button type="submit"> Salvar Saída</button>
      </Form>
    </>
  );
}

export default ExpensePage;

const Header = styled.header`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content:space-between;
  height: 50px;
  align-items:center;

  h1{
    font-weight: 700;
    font-size: 26px;
    color: rgba(255,255,255,1);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 25px;

  input{
    height: 50px;
    width: 85%;
    border: 1px solid grey;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 15px;
    font-size: 20px;
    }

    button{
      width: 85%;
      height: 50px;
      background-color:rgba(163, 40, 214, 1);
      border:none;
      border-radius: 5px;
      font-size: 22px;
      color: rgba(255,255,255,1);
      font-weight: 700;
    }
`;
