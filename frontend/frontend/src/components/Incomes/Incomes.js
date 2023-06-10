import React, { useEffect } from 'react'
import { format } from "date-fns";
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from './IncomeItem';


function Incomes() {

    const {addIncome, getIncomes, deleteIncome, incomes, totalIncome} = useGlobalContext(); 
    console.log(totalIncome);
    useEffect(() => {
        getIncomes();
    }, [])

    return (
        <IncomesStyled>
            <InnerLayout>
            <h1>Incomes</h1>
            <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                    <Form />
                </div>  
                <div className='incomes'>
                    {incomes.map((income) => {

                        const {_id, title, amount, date, category, description} = income;
                        
                        const dateTemp      = new Date(date);   //Convert date to temp Date object to be used with format()
                        const formattedDate = format(dateTemp, "MM/dd/yyyy");  //Format date to string in custom format
                        
                        return <IncomeItem
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount} 
                            date= {formattedDate}
                            category={category}
                            indicatorColor={'var(--color-green)'}
                            deleteIncome={deleteIncome}
                                                   
                         />
                    })}
                </div>
            </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
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
            color: var(--color-green);
        }

    }
    .income-content{
        display: flex;
        gap:2rem;
        .incomes{
            flex:1;
        }
    }
    
    
    `;

export default Incomes