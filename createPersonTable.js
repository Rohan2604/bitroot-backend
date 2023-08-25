async function createPersonTable(connection) {
    const createPersonTableQuery = `
        CREATE TABLE IF NOT EXISTS Person (
            pid INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) -- Add image column
        );
    `;

    try {
        await connection.query(createPersonTableQuery);
        console.log('Person table created successfully');
    } catch (err) {
        console.error('Error creating person table:', err);
        throw err;
    }
}

module.exports = { createPersonTable };
