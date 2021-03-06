require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter.js');
const authRouter = require('./router/authRouter.js');
const friendsRouter = require('./router/friendsRouter.js');
const messageRouter = require('./router/messageRouter.js');
const errorMiddleWare = require('./middlewares/errorMiddleware');
const usersRouter = require('./router/userRouter.js');
const fileUpload = require('express-fileupload');
const http = require('http');

const PORT = process.env.PORT || 5050;
const app = express()
const socket = require('socket.io');

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', postRouter)
app.use('/api', authRouter)
app.use('/api', usersRouter)
app.use('/api', friendsRouter)
app.use('/api', messageRouter)
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

