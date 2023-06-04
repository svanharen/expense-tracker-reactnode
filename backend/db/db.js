const mongoose = require('mongoose');

const db = async () => {
   try { 
        mongoose.set('strictQuery', false); // To avoid the deprecation warning
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')

   } catch (error) {
        console.log('Error connecting to MongoDB')
   }
}

module.exports = {db}