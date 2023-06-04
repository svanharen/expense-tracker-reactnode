const router = require('express').Router();
const {addIncome, getIncomes, deleteIncome}     = require('../controllers/IncomeController');
const {addExpense, getExpenses, deleteExpense}  = require('../controllers/ExpenseController');

router.get('/', (req, res) => {
    res.send('Hello World!')
});


router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expense', addExpense)
        .get('/get-expenses', getExpenses)
        .delete('/delete-expense/:id', deleteExpense)



module.exports = router;