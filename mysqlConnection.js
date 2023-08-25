const mysql = require('mysql2/promise');

// Function to establish a connection
async function createConnection() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '@Rohit6600',
            database: 'bitroot'
        });
        console.log('Connected to MySQL database');
        return connection;
    } catch (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
}

module.exports = { createConnection };
