
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter.js');
const authRouter = require('./router/authRouter.js');

const PORT = 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', postRouter)
app.use('/api', authRouter)

const startApp = async () => {
    try {
        await mongoose.connect("mongodb+srv://asar:admin@auth.oxhehym.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true, 
            useNewUrlParser: true
        });
        app.listen(PORT, () => console.log("start" + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()