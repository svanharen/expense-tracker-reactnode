
// Importing modules
const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs') // To read all the files in a directory

require('dotenv').config()

// Initializing modules
const app = express()
const PORT = process.env.PORT


// Middlewares
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors())         // To enable CORS

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route))) // To use all the routes in the routes directory with the prefix /api/v1 



const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

server()