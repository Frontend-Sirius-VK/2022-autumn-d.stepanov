'use strict';
require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));

const port = process.env.PORT || 3002;

const db = require('./Model/querys.js');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});


app.get('/animeContents', async (req, res) => {
    const result = await db.getAllContent();
    res.json(result);
});


app.post('/create', async (req, res) => {
    const { urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
    const id = await db.create(urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);

    res.json({id});
})

app.put('/update', async (req, res) => {
    const { id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
    const updateId = await db.update(id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);

    res.json({updateId});
})


app.delete('/delete', async (req, res) => {
    const { id } = req.body;
    const deleteId = await db.deleteContent(id);

    res.json({deleteId});
})

app.get('/login', (req, res) => {
    res.send('user login');
})


app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
