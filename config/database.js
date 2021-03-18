const mongoose = require('mongoose');


const connectionURI = 'mongodb+srv://admin:pepper22@cluster0.oc1n0.mongodb.net/expresstagram?retryWrites=true&w=majority'

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});