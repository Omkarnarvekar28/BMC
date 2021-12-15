const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const mysql = require('mysql2');
const util = require('util');
const nodemailer = require('nodemailer');

const connection = mysql.createConnection(config.database);

const transporter = nodemailer.createTransport(config.email);
const query = util.promisify(connection.query).bind(connection);

const executeQuery = async function(nativeQuery) {
    try {
        const records = await query(nativeQuery);
        console.log(records);
        return records;
    } catch (e) {
        console.log(e);
    }
};


module.exports = { executeQuery, transporter };