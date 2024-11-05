const mongoose = require('mongoose');
require('dotenv').config();

console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line to ensure the variable is loaded

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Defining a simple schema
const sampleSchema = new mongoose.Schema({
    name: String
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = {
    Sample
};
