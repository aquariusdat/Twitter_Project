// dotenv
require('dotenv').config()
// import libraries
const express = require('express');
const app = express();
const APP_PORT = process.env.APP_PORT || 5000;
const userRoutes = require('./app/routes/users.route');
const authRoutes = require('./app/routes/auth.route');
const cors = require('cors');

// db connection
const { connectDB } = require('./app/configs/db');
connectDB();

// body-parse
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// routing
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoutes);

// listening server running at {Server}:{PORT}
app.listen(APP_PORT, () => {
    console.log(`Server running at localhost:${APP_PORT}.`);
})