const http = require('http');
const bodyParser = require('body-parser');
const express = require("express");

const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let memory = {};

app.get('/', (req, res) => {
    if (Object.keys(memory).length !== 0) {
        console.log('zapros maded');
        res.status(200).json(memory);
    } else {
        console.log('zapros maded');
        res.status(200).json({ memory: null });
    }
})

app.post('/', (req, res) => {
    console.log('prinyal');
    console.log(Object.keys(memory));
    if (Object.keys(memory).length === 0) {
        memory = JSON.parse(JSON.stringify(req.body));
        res.status(200).json({ status: 'created' });
        console.log(memory);
    } else {
        res.status(400).json({ status: 'object exists' });
    }
})

app.put('/', (req, res) => {
    if (Object.keys(memory).length !== 0) {
        memory = req.body;
        res.status(200).json({ status: "re-created" });
        console.log(memory);
    } else {
        res.status(400).json({ status: 'object not exists' });
        console.log(memory);
    }
})

app.patch('/', (req, res) => {
    if (Object.keys(memory).length !== 0) {
        memory = Object.assign(memory, req.body);
        res.status(200).json({ status: "updated" });
        console.log(memory);
    } else {
        res.status(400).json({ status: 'object not exists' });
        console.log(memory);
    }
})



server.listen(2000, () => {
    console.log('app is listening to port 2000');
})