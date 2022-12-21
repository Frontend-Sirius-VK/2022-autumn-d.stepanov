const {Pool} = require('pg'); 

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    database: process.env.POSTGRES_DB ,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

async function getAllContent() {
    try {

        const res = await pool.query('SELECT * FROM anime_contents ORDER BY ID');
        return res.rows;    

    } catch (error) {
        console.log(error);
    }
}

async function getById(id) {
    try {
        const res = await pool.query('SELECT * FROM anime_contents WHERE id = $1', [id]);
        return res.rows;
    } catch(error) {
        console.log(error);
    }
}

async function create(urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime, episode, status, categories, originalSource) {
    try {

        const {rows} = await pool.query(
            'INSERT INTO anime_contents (urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime, episode, status, categories, originalSource) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id', 
            [urlImage, urlAnime, nameAnime, categoryAnime, Number(ageAnime), descriptionAnime, Number(episode), status, categories, originalSource]
            );

        return rows[0].id;

    } catch (error) {
        console.log(error);
    }
}

async function update(id, urlImage, urlAnime, nameAnime, categoryAnime, ageAnime, descriptionAnime, episode, status, categories, originalSource) {
    try {

        const {rows} = await pool.query(
            'UPDATE anime_contents SET urlImage  = $1, urlAnime = $2, nameAnime = $3, categoryAnime = $4, ageAnime = $5, descriptionAnime = $6, episode = $7, status = $8, categories = $9, originalsource = $10  WHERE id = $11 RETURNING id', 
            [urlImage, urlAnime, nameAnime, categoryAnime, Number(ageAnime), descriptionAnime, episode, status, categories, originalSource, id]
            );

        return rows[0].id;

    } catch (error) {
        console.log(error);
    }
}

async function deleteContent(id) {
    try {

        const {rows} = await pool.query(
            'DELETE FROM anime_contents WHERE id = $1 RETURNING id', 
            [id]
            );
            
        return rows[0].id;

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllContent,
    getById,
    create,
    update,
    deleteContent
}
