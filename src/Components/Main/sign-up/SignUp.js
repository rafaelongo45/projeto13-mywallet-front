import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({name:"", email:"", password:"", confirmPassword:""});

  function userSignUp(event){
    event.preventDefault();

    if(userData.password!==userData.confirmPassword){
      alert("Senhas não conferem!")
      return
    }

    const promise = axios.post("https://mywallet-b.herokuapp.com/signup", {
      name: userData.name, 
      email: userData.email,
      password: userData.password
  });

    promise.then((response) => {
      const {data} = response;
      console.log(data);
      navigate("/")
    });
    promise.catch((error) => {
      alert(error.response.data)
      console.log(error)
    });
  }

  return (
    <>
      <Header>MyWallet</Header>
      <Form onSubmit={userSignUp}>
        <input placeholder="Nome" value={userData.name} onChange={e => setUserData({...userData, name:e.target.value})}></input>
        <input type = "email" placeholder="E-mail" value = {userData.email} onChange={e => setUserData({...userData, email:e.target.value})}></input>
        <input type ="password" placeholder="Senha" value = {userData.password} onChange={e => setUserData({...userData, password:e.target.value})}></input>
        <input type ="password" value = {userData.confirmPassword} onChange={e => setUserData({...userData, confirmPassword:e.target.value})} placeholder="Confirme a senha"></input>
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/"><Button> Já tem uma conta? Entre agora!</Button></Link>
    </>
  );
}

export default SignUp;

const Header = styled.header`
  font-family: Saira Stencil One;
  font-size: 32px;
  margin-top:130px;
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
    width: 85%;
    height: 50px;
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


