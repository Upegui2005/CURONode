const express = require('express')
const { connect } = require('./db/conection')
const app = express()
const port = 9596   
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/catalogo', (req, res) => {
    res.render('catalogo')
})

app.listen(port, () => {
    console.log(`Escucha al port  ${port}`)
})

connect()