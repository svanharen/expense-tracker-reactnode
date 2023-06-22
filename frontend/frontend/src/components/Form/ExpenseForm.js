import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { icons } from '../../utils/icons';

function Form() {

    const {addExpense} = useGlobalContext();

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
        
        e.preventDefault(); //Prevent page refresh
        addExpense(inputState);
        setInputState({     //Reset form
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <FormStyled onSubmit={handleSubmit} >
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
       
        <div className="input-content">
            <textarea
                type="text"
                value={description}
                name={'description'}
                placeholder={'Description'}
                onChange={handleInput('description')}
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
                <option value="rent">Housing</option>
                <option value="grocery">Groceries</option>
                <option value="dinner">Meal-Out</option>
                <option value="drinks">Drinks</option>
                <option value="clothes">Clothes</option>
                <option value="util">Utilities</option>
                <option value="other">Misc</option>
            </select>
        </div>
        <div className="submit-btn">
            <Button 
                name={"Add"}
                icon={icons.plus}
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
            font-size: 1rem;
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