const Income = require('../models/IncomeModel');

// Add income
exports.addIncome = async (req, res) => {
    const {title, amount, date, category, description}  = req.body;

    const income = Income({
        title,
        amount,
        date,
        category,
        description
    })
    try{
        //validations
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({errorMessage: 'All fields are required, looks like you missed one!'})
        }
        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({errorMessage: 'Invalid amount'})
        }
        await income.save();
        res.status(200).json({successMessage: 'Income added successfully!'})

    } catch(error) {
        res.status(500).json({errorMessage: 'Internal server error'})
    }

    //console.log(income);
}

// Get all incomes
exports.getIncomes = async (req, res) => {
    try{
        const incomes = await Income.find().sort({createdAt: -1});
        res.status(200).json(incomes)
    } catch(error) {
        res.status(500).json({errorMessage: 'Internal server error'})
    }
}

// Delete income using id
exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    Income.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({successMessage: 'Income deleted successfully!'})
    })
    .catch((error) => {
        res.status(500).json({errorMessage: 'Internal server error'})
    }) 
}