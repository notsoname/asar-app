require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter.js');
const authRouter = require('./router/authRouter.js');
const errorMiddleWare = require('./middlewares/errorMiddleware')


const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use('/api', postRouter)
app.use('/api', authRouter)
app.use(errorMiddleWare);

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true, 
            useNewUrlParser: true
        });
        app.listen(PORT, () => console.log("start" + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()