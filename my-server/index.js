const express = require('express')
const cors = require('cors')
const app = express();
const phones = require('./phones.json')
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Adnan Hossain')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get(('/phones/:id'), (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);
})

app.listen(port,  () => {
    console.log(`port is ${port}`)
})