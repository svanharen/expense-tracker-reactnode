import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Chart from '../Chart/Chart';
import History from '../History/History';
import { icons } from '../../utils/icons';

function Dashboard() {

  const {totalIncome, totalExpense, getIncomes, getExpenses} = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [])

  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-container">
              <div className="chart-container">
                <Chart />
                <div className="amount-container">
                  <div className="income">
                    <h2>Income</h2>
                      <p> {icons.dollar} {totalIncome()}</p>
                  </div>
                  <div className="expense">
                    <h2>Expenses</h2>
                      <p> {icons.dollar} {totalExpense()}</p>
                  </div>
                  <div className="balance">
                    <h2>Balance</h2>
                      <p> {icons.dollar} {totalIncome() - totalExpense()}</p>
                  </div>
                </div>
              </div>
              <div className='history-container'>
                <History />
              </div>
            </div>
            
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  .stats-container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-container{
      grid-column: 1 / 4;
      height: 400px;
      .amount-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense{
          grid-column: span 2;
        }
        .income, .expense, .balance{
          background: #FCF6F9;
          padding: 1rem;
          border-radius: 20px;
          box-shadow: var(--primary-shadow);
          border: 2px solid #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p{
            font-size: 2.5rem;
            font-weight: 700;
          }
        }
        .balance{
          grid-column: 2 / 4;
          p{
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3.5rem;
          }
          
        }
      }

    }
    .history-container{
      grid-column: 4 / -1;
      h2{
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

  }
`;

export default Dashboard