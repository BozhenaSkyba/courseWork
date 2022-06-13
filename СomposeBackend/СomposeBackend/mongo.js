const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://beetroot:uyoPCm3eVHv8AfOc@cluster0.fwbf8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// beetroot/beetrootdb 

module.exports = async () => {
    await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose;
}