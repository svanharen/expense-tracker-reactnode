import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from './IncomeItem';


function Incomes() {

    const {addIncome, getIncomes, incomes} = useGlobalContext(); 

    useEffect(() => {
        getIncomes();
    }, [])

    return (
        <IncomesStyled>
            <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-content">
                <div className="form-container"></div>
                    <Form />
                <div className='incomes'>
                    {incomes.map((income) => {
                        const {_id, title, amount, date, category, description} = income;
                        return <IncomeItem
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount} 
                            date= {date}
                            category={category}
                            indicatorColor={'var(--color-green)'}
                                                   
                         />
                    })}
                </div>
            </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
    
    `;

export default Incomes