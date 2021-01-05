
const mongoose = require('mongoose');

async function connectdb() {

    try {
        await mongoose.connect('mongodb://localhost:27017/mypm', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connectdb };