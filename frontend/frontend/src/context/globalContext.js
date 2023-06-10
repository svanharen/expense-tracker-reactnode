import React, {useState, useContext} from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';


const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes]     = useState([]);
    const [expenses, setExpenses]   = useState([]);
    const [error, setError]         = useState(null);


    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        getIncomes(); //Refresh incomes list
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        setIncomes(response.data);
    }    

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-income/${id}`)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        getIncomes(); //Refresh incomes list
    }

    const totalIncome = () => {
        let total = 0;
        incomes.forEach((income) => {
            total += income.amount;
        })
        
        return total;
    }
    console.log('totalIncome: ', totalIncome());
    

    return (
        <GlobalContext.Provider
            value={{
                addIncome,
                getIncomes,
                deleteIncome,
                totalIncome,
                incomes,
                
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext= () => {
    return useContext(GlobalContext);
}