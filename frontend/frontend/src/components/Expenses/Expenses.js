import React, { useEffect } from 'react'
import { format } from "date-fns";
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import ExpenseForm from '../Form/ExpenseForm';
import ExpenseItem from './ExpenseItem';


function Expenses() {

    const {addExpense, getExpenses, deleteExpense, expenses, totalExpense} = useGlobalContext(); 
    //console.log(totalIncome);
    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <ExpensesStyled>
            <InnerLayout>
            <h1>Expenses</h1>
            <h2 className='total-expense'>Total Expenses: <span>-${totalExpense()}</span></h2>
            <div className="expense-content">
                <div className="form-container">
                    <ExpenseForm />
                </div>  
                <div className='expenses'>
                    {expenses.map((expense) => {

                        const {_id, title, amount, date, category, description} = expense;
                        
                        const dateTemp      = new Date(date);                   //Convert date to temp Date object to be used with format()
                        const formattedDate = format(dateTemp, "MM/dd/yyyy");  //Format date to string in custom format
                        
                        return <ExpenseItem
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount} 
                            date= {formattedDate}
                            category={category}
                            indicatorColor={'var(--color-delete)'}
                            deleteExpense={deleteExpense}
                                                   
                         />
                    })}
                </div>
            </div>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: 2px solid #FFFFFF;
        box-shadow: var(--primary-shadow);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.5rem;
        gap: .5rem;
        span{
            font-size: 2rem;
            font-weight: 800;
            color: var(--color-delete);
        }

    }
    .expense-content{
        display: flex;
        gap:2rem;
        .expenses{
            flex:1;
        }
    }
    
    
    `;

export default Expenses