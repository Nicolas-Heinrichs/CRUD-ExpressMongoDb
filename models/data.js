require('dotenv').config();

PORT = process.env.PORT;
DB = process.env.DB


module.exports = {
    PORT: PORT,
    DB: DB
}