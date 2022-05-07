import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";

import UserContext from "../../Contexts/UserContext.js";
import RenderTransactions from "./RenderTransactions.js";

function WalletPage() {
  const navigate = useNavigate();
  const [total,setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const {data} = useContext(UserContext);

  useEffect(()=> {
    const config = {
    headers:{
      'Authorization': `Bearer ${data.token}`
    }
  }
    const promise = axios.get("http://127.0.0.1:5000/transactions", config);

    promise.then((response) => {
      setTransactions(response.data);
    })

    promise.catch((error) => {
      alert(error.response.data);
      console.log(error);
    })
  }, [data.token]);

  function logOut(e){
    e.preventDefault();
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <Header>
        <h1>Olá, {data.user}</h1>
        <button onClick = {logOut}>
          <RiLogoutBoxRLine />
        </button>
      </Header>

      <RenderTransactions transactions = {transactions} total={total} setTotal={setTotal}/>

      <Section>
        <Link to="/income">
          <button>
            <span>
              <AiOutlinePlusCircle />
            </span>
            <p>Nova entrada</p>
          </button>
        </Link>

        <Link to="/expense">
          <button>
            <span>
              <AiOutlineMinusCircle />
            </span>
            <p>Nova saída</p>
          </button>
        </Link>
      </Section>
    </>
  );
}

export default WalletPage;

const Header = styled.header`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: rgba(255, 255, 255, 1);
  }

  button {
    background: none;
    font-size: 30px;
    border: none;
    color: rgba(255, 255, 255, 1);
  }
`;

const Section = styled.section`
  height: 16%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  a {
    width: 47%;
    text-decoration: none;
  }

  button {
    height: 100%;
    width: 93%;
    border: none;
    border-radius: 5px;
    background-color: rgba(163, 40, 214, 1);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    span {
      font-size: 28px;
      margin-top: 10px;
      margin-left: 5px;
      color: rgba(255, 255, 255, 1);
    }

    p {
      width: 50%;
      font-size: 19px;
      text-align: start;
      margin-left: 5px;
      margin-bottom: 10px;
      color: rgba(255, 255, 255, 1);
      font-weight: 700;
    }
  }
`;

