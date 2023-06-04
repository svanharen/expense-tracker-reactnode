const Expense = require('../models/ExpenseModel');

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const expense = Expense({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validations
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({errorMessage: 'All fields are required, looks like you missed one!'})
        }
        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({errorMessage: 'Invalid amount'})
        }
        await expense.save();
        res.status(200).json({successMessage: 'Expense added successfully!'})

    } catch(error) {
        res.status(500).json({errorMessage: 'Internal server error'})
    }

    console.log(expense);
}

// Get all expenses
exports.getExpenses = async (req, res) => {
    try{
        const expenses = await Expense.find().sort({createdAt: -1});
        res.status(200).json(expenses)
    } catch(error) {
        res.status(500).json({errorMessage: 'Internal server error'})
    }
}

// Delete expense using id
exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    Expense.findByIdAndDelete(id)
    .then((expense) => {
        res.status(200).json({successMessage: 'Expense deleted successfully!'})
    })
    .catch((error) => {
        res.status(500).json({errorMessage: 'Internal server error'})
    }) 
}