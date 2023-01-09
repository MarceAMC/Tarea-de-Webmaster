var pool = require('./bd');


async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query();
    return rows;
}

module.exports = { getNovedades }