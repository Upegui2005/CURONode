const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


function connect() {
    const uri = `mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@curo.gpgsdmi.mongodb.net/?retryWrites=true&`
    mongoose.connect(uri)
    .then(() => {
        console.log('conectado')
    })
    .catch(err => {
        console.error('Error' + err)    
    })
}

module.exports = { connect }