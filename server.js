'use strict';

const express = require('express');
const body = require('body-parser');
const path = require('path');
const app = express();

app.use(body.json());
app.use(express.static('.'));

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/login', (req, res) => {
    res.send('user login');
})


app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
