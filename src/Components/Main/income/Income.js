import styled from "styled-components";
import {Link} from "react-router-dom";

function IncomePage(){
  return (
    <>
        <Header>
          <h1>Nova Entrada</h1>
        </Header>

        <Form >
        <input placeholder="Valor"></input>
        <input placeholder="Descrição"></input>
        <Link to = "/wallet"><button > Salvar Entrada</button></Link>
      </Form>
    </>
  );
}

export default IncomePage;

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

    a{
      width: 86%;
      padding-right: 10px;
    }

    button{
      width: 100%;
      height: 50px;
      background-color:rgba(163, 40, 214, 1);
      border:none;
      border-radius: 5px;
      font-size: 22px;
      color: rgba(255,255,255,1);
      font-weight: 700;
    }
`;
