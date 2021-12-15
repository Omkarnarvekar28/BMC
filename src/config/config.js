const dotenv = require('dotenv').config();

let config = {
    development: {
        url: 'http://localhost',
        //mySQL connection settings
        database: {
            host: process.env.DB_HOST,
            port: '3306',
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        //server details
        server: {
            host: 'localhost',
            port: '3000'
        },
        //email details
        email: {
            service: 'gmail',
            auth: {
                user: process.env.Username,
                pass: process.env.pass
            }
        }
    },
    production: {
        //url to be used in link generation
        url: 'http://localhost',
        database: {
            host: process.env.DB_HOST,
            port: '3306',
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    }
};
module.exports = config;