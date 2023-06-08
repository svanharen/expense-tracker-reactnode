import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

function Form() {

    const {addIncome} = useGlobalContext();

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({
            ...inputState,
            [name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        
        addIncome(inputState);
        e.preventDefault(); //Prevent page refresh
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-content">
            <input
                type="text"
                value={title}
                name={'title'}
                placeholder={'Title'}
                onChange={handleInput('title')}
            />
        </div>
        <div className="input-content">
            <input
                type="number"
                value={amount}
                name={'amount'}
                placeholder={'Amount'}
                onChange={handleInput('amount')}
            />
        </div>
        <div className="input-content">
            <DatePicker
                id='date'
                placeholderText='Enter a date'
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(date) =>{ setInputState({...inputState, date: date})
                }}
            />
        </div>
        <div className="selects input-content">
            <select 
                required 
                value={category}
                name='categoty'
                id='category'
                onChange={handleInput('category')}
            >
                <option value="" disabled>Select a category</option>
                <option value="paycheck">Paycheck</option>
                <option value="gift">Gift</option>
                <option value="investment">Investment</option>
                <option value="stock">Stock</option>
                <option value="crypto">Crypto</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-content">
            <textarea
                type="text"
                value={description}
                name={'description'}
                placeholder={'Description'}
                onChange={handleInput('description')}
            />
        </div>
        <div className="submit-btn">
            <Button 
                name={"Add Income"}
                icon={plus}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                bg={'var(--color-accent)'}
                color={'#000'}
                />
        </div>
    </FormStyled>
  )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4)
        }
    }
    .input-content{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-start;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 0.9);
            }
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Form