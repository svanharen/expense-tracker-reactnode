import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import { useGlobalContext } from '../../context/globalContext';

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
        e.preventDefault();
        addIncome(inputState);
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
                id="date"
                placeholderText='Enter a date'
                selected={date}
                dateFormat={'dd/MM/yyyy'}
                onChange={(date) => setInputState({...inputState, date})}
            
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
            <button type='submit'>Add Income</button>
        </div>
    </FormStyled>
  )
}


const FormStyled = styled.div`
`;
export default Form