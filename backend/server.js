'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

const db = require('./model/querys.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('.'));

const port = process.env.PORT || 3002;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '.', '../frontend/index.html'));
// });

app.use(express.static('dist'));

// app.get('/api/anime/*', (req, res) => {
//     try {
//         res.sendFile(path.join(__dirname, '.', '../frontend/index.html'));

//     } catch(error) {
//         res.status(500).end();
//     }
// });

app.get('/api/contents', async (req, res) => {
    try {

        console.log('работает');
        const result = await db.getAllContent();
        
        res.json(result);

    } catch(error) {
        res.status(500).end();
    }
});

app.get('/api/contents/:id', async (req, res) => {
    try {

        const id = parseInt(req.params.id)
        const result = await db.getById(id);
        res.json(result);

    } catch(error) {
        res.status(500).end();
    }
});

app.post('/api/create', async (req, res) => {
    const { urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
    const id = await db.create(urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);

    res.json({id});
})

app.put('/api/update', async (req, res) => {
    const { id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
    const updateId = await db.update(id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);

    res.json({updateId});
})

app.delete('/api/delete', async (req, res) => {
    const { id } = req.body;
    const deleteId = await db.deleteContent(id);

    res.json({deleteId});
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
