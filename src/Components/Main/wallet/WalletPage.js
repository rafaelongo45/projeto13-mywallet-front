import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

import UserContext from "../../Contexts/UserContext.js";

function WalletPage() {
  const {token} = useContext(UserContext);
  console.log(token)
  
  return (
    <>
      <Header>
        <h1>Olá, nome do usuario</h1>
        <button>
          <RiLogoutBoxRLine />
        </button>
      </Header>

      <Main>
        <p>Não há registros de entrada ou saída</p>
      </Main>

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

//TODO: Implementar a biblioteca axios quando o back-end estiver terminado.

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

const Main = styled.main`
  width: 90%;
  height: 68%;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 60%;
    text-align: center;
    font-size: 22px;
    color: rgba(134, 134, 134, 1);
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
