import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../../Contexts/UserContext.js";

function SignIn() {
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState({email:"", password:""});
  const {setToken} = useContext(UserContext);

  function login(event){
    event.preventDefault();

    const promise = axios.post("http://127.0.0.1:5000/login", userCred);

    promise.then((response) => {
      setToken(response.data)
      navigate("/wallet")
    })

    promise.catch((error) => {
      alert(error.response.data);
      console.log(error);
    });
  }

  return (
    <>
      <Header>MyWallet</Header>
      <Form onSubmit={login}>
        <input placeholder="E-mail" type="email" value={userCred.email} onChange={e=> setUserCred({...userCred, email:e.target.value})}></input>
        <input placeholder="Senha"type="password"value={userCred.password} onChange={e=> setUserCred({...userCred, password:e.target.value})}></input>
        <button type="submit"> Entrar</button>
      </Form>
      <Link to="/sign-up"><Button > Primeira vez? Cadastre-se!</Button></Link>
    </>
  );
}

export default SignIn;

const Header = styled.header`
  font-family: Saira Stencil One;
  font-size: 32px;
  margin-top:210px;
  margin-bottom: 35px;
  height: fit-content;  
  color: rgba(255,255,255,1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  

  input{
    height: 50px;
    width: 85%;
    border: 1px solid grey;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    }

    button{
      width: 85%;
      height: 45px;
      background-color:rgba(163, 40, 214, 1);
      border:none;
      border-radius: 5px;
      font-size: 25px;
      color: rgba(255,255,255,1);
      font-weight: 700;
    }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  background-color:rgba(140, 17, 190, 1);
  border:none;
  border-radius: 5px;
  font-size: 16px;
  color: rgba(255,255,255,1);
  font-weight: 700;
`
