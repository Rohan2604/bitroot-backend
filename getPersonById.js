async function getPersonById(connection, pid) {
    const getPersonQuery = `
        SELECT *
        FROM Person
        WHERE pid = ?;
    `;

    try {
        const [rows] = await connection.query(getPersonQuery, [pid]);
        if (rows.length === 0) {
            console.log(`No person found with id ${pid}`);
        } else {
            const person = rows[0];
            console.log('Person details by ID:');
            console.log(`Name: ${person.name}`);
            console.log(`Image: ${person.image}`);
        }
    } catch (err) {
        console.error('Error fetching person by ID:', err);
        throw err;
    }
}

module.exports = { getPersonById };
