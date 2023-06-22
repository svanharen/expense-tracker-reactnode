import React from 'react'
import styled from 'styled-components'
import { icons } from '../../utils/icons.js';
import Button from '../Button/Button';



function ExpenseItem({
    id, 
    title,
    amount,
    date,
    category,
    description,
    deleteExpense,
    indicatorColor,
    type
}) 
{
    const categoryIcon = () => {
        switch (category) {
            case 'rent':
                return icons.home;
            case 'grocery':
                return icons.grocery;
            case 'dinner':
                return icons.dinner;
            case 'drinks':
                return icons.drinks;
            case 'clothes':
                return icons.clothes;
            case'util':
                return icons.util;
            case 'other':
                return icons.other;
            default:
                return ''
        }   
    }

   

  return (
    <ExpenseItemStyled indicator = {indicatorColor}>  
        <div className="icon">
            { categoryIcon() }
        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p className="category-string">{category}</p>
                    <p>{icons.dollar} {amount}</p>
                    <p>{icons.calendar} {date}</p>
                    <p>
                        {icons.comment}
                        {description}
                    </p>
                </div>
                <div className="btn-icon">
                    <Button 
                        icon={icons.trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color)'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        onClick={() => deleteExpense(id)}
                    />
                </div>
            </div>
        </div>
    </ExpenseItemStyled>
  )
}

const ExpenseItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: var(--primary-shadow);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.5rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        h5{
            font-size: 1.5rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
    }
    .inner-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primar-color);
                opacity: 0.8;
            }
            .category-string{
                text-transform: uppercase;
                font-size: 0.7rem;
                font-weight: 700;
            }
        }
    }
    `;

export default ExpenseItem