async function createContactTable(connection) {
    const createContactTableQuery = `
        CREATE TABLE Contact (
            cid INT PRIMARY KEY,
            contactnumber VARCHAR(20),
            pid INT,
            FOREIGN KEY (pid) REFERENCES Person(pid)
        );
    `;

    try {
        await connection.query(createContactTableQuery);
        console.log('Contact table created successfully');
    } catch (err) {
        console.error('Error creating Contact table:', err);
        throw err;
    }
}

module.exports = { createContactTable };
