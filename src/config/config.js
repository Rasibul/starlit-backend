require("dotenv").config();

const config = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    dbConnection: process.env.DB_CONNECTION,
};

module.exports = config;
