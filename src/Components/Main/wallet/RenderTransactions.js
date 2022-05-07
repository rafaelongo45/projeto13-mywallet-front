import styled from "styled-components";

function RenderTransactions({transactions, total, setTotal}){
  let sumIncome = 0;
  let sumExpense = 0;

  return (
    <Main total={total}>
        {
          transactions.length === 0? 
            <article>
              <h1>Não há registros de entrada ou saída</h1>

            </article>
          :
          <>
            <section>
            {transactions.map((transaction, index) => {
              if(transaction.type === "income"){
                sumIncome += parseFloat(transaction.amount);
              }else{
                sumExpense += parseFloat(transaction.amount);
              }
                setTotal((sumIncome - sumExpense).toFixed(2));

              return(
                <Div type={transaction.type} key = {index + transaction.description}>
                  <h1>{transaction.date}</h1>
                  <span>
                    <p>{transaction.description}</p>
                    <em>{transaction.amount.toFixed(2).toString().replace('.',',')}</em>
                  </span>  
                </Div>
              )              
            })}
            </section>

            <footer>
              <h2>SALDO</h2>
              <p>{total.toString().replace('.',',')}</p>
            </footer>
          </>
        }

        
      </Main>
  )
}

export default RenderTransactions;

const Main = styled.main`
  width: 90%;
  height: 68%;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;
  border-radius: 6px;
  display: flex;
  flex-direction:row;
  justify-content:center;
  flex-wrap:wrap;
  position: relative;

  section{
    width: 95%;
    height: 92%;
    position:relative;
    top: 0;
    overflow-y: scroll;
  }

  article{
    display:flex;
    width:100%;
    height: 100%;
    align-items:center;
    justify-content:center;
  }

  h1 {
    width: 60%;
    text-align: center;
    font-size: 22px;
    color: rgba(134, 134, 134, 1);
    height:fit-content;
  }

  footer{
    width: 100%;
    height:fit-content;
    position:absolute;
    z-index:1;
    bottom: 0;
    display:flex;
    justify-content: space-between;
    font-size: 18px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 1);

    h2{
    margin: 0 0 15px 15px;
    font-weight: 700;
    }

    p{
      margin: 0 15px 15px 0;
      color: ${props => props.total > 0 ?'rgba(34, 182, 31, 1)':'rgb(199, 0, 0)'}

    }
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  margin-top: 25px;

  h1{
    font-size: 16px;
    color: rgba(198, 198, 198, 1);
    width:15%;
    text-align:start;
  }

  span{
    display:flex;
    justify-content: space-between;
    width:85%;
  }

  p{
    text-align:start;
    color: rgba(0,0,0,1);
    font-size:18px;
    text-align:start;
  }

  em{
    color: ${props => props.type === "income"?'rgba(34, 182, 31, 1)':'rgb(199, 0, 0)'};
    text-align:end;
  }
`