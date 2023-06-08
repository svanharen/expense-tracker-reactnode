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
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        setIncomes(response.data);
    }    

    return (
        <GlobalContext.Provider
            value={{
                addIncome,
                getIncomes,
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