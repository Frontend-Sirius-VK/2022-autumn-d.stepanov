'use strict';

const express = require('express');
const app = express();
const port = 3002;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/login', (req, res) => {
    res.send('user login')
})


app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
