import styled from "styled-components";
import { Link }from "react-router-dom";

function SignUp() {
  return (
    <>
      <Header>MyWallet</Header>
      <Form >
        <input placeholder="Nome"></input>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
        <input placeholder="Confirme a senha"></input>
        <Link to="/"><button>Cadastrar</button></Link>
      </Form>
      <Link to="/"><Button > Já tem uma conta? Entre agora!</Button></Link>
    </>
  );
}

//TODO: Implementar a biblioteca axios quando o back-end estiver terminado.
//TODO: Botão de cadastrar se tiver sucesso, voltar para a página de login.


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

    a{
      width: 85%;
      padding-right: 10px;
    }

    button{
      width: 100%;
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


