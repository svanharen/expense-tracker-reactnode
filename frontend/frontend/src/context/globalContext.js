import React, {useState, useContext} from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';


const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes]     = useState([]);
    const [expenses, setExpenses]   = useState([]);
    const [error, setError]         = useState(null);


    // INCOME FUNCTIONS
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
    //console.log('totalIncome: ', totalIncome());
    


    //EXPENSES FUNCTIONS
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}/get-expenses`)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        setExpenses(response.data);
    }

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}/add-expense`, expense)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        getExpenses(); //Refresh expenses list
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        .catch((err) =>{
            setError(err.response.data.message);
        })
        getExpenses(); //Refresh incomes list
    }

    const totalExpense = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total += expense.amount;
        })
        
        return total;
    }

    //DASHBOARD FUNCTIONS
    const transactionHistory = () => {
        const transactions = [...incomes, ...expenses];
        transactions.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        return transactions.slice(0, 5);
    }


    return (
        <GlobalContext.Provider
            value={{
                addIncome,
                getIncomes,
                deleteIncome,
                totalIncome,
                incomes,
                addExpense,
                getExpenses,
                deleteExpense,
                totalExpense,
                expenses,
                transactionHistory,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext= () => {
    return useContext(GlobalContext);
}