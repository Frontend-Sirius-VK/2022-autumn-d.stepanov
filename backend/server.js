'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const db = require('./model/querys.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', '../frontend/index.html'));
});

app.get('/anime/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '.', '../frontend/index.html'));

    } catch(error) {
        res.status(500).end();
    }
});

app.get('/contents', async (req, res) => {
    try {
        const result = await db.getAllContent();
        
        if (result.length === 0) {
            res.status(500).end();
        }

        res.status(200).json(result);
    } catch(error) {
        res.status(500).end();
    }
});

app.get('/contents/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        if (!id) {
            res.status(400).end();
        }

        const result = await db.getById(id);
        if (result.length === 0) {
            res.status(404).end();
        }
        res.status(200).json(result);
    } catch(error) {
        res.status(500).end();
    }
});

app.post('/', async (req, res) => {
    if (Object.keys(req.body).length != 6) {
        res.status(400).end();
    }

    try {
        const { urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
        const id = await db.create(urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);
        res.status(201).json({id});
    } catch(error) {
        res.status(500).end();
    }
})

app.put('/', async (req, res) => {
    if (Object.keys(req.body).length != 7) {
        res.status(400).end();
    }

    try {
        const { id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime } = req.body;
        const updateId = await db.update(id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime);
        res.status(200).json({updateId});
    } catch(error) {
        res.status(500).end();
    }
})

app.delete('/', async (req, res) => {
    if (Object.keys(req.body).length != 1) {
        res.status(400).end();
    }

    try {
        const { id } = req.body;
        await db.deleteContent(id);
        res.status(200).end();
    } catch(TypeError) {
        res.status(500).end();
    }
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
