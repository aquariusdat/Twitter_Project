const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: [true, 'Name must be required'],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        require: [true, 'Email must be required'],
    },
    password: {
        type: String,
        trim: true,
        require: [true, 'Password must be required'],
        minLength: [6, 'Password must be at least 6 characters'],
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;