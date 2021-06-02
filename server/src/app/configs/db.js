const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log('DB connection successfully');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = { connectDB };