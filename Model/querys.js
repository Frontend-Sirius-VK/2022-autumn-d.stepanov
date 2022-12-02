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

        const res = await pool.query('select * from anime_contents order by id desc');
        return res.rows;    

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllContent
}
