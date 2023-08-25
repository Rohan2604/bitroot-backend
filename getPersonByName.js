async function getPersonByName(connection, personName) {
    const getPersonQuery = `
        SELECT *
        FROM Person
        WHERE name = ?;
    `;

    try {
        const [rows] = await connection.query(getPersonQuery, [personName]);
        if (rows.length === 0) {
            console.log(`No person found with name ${personName}`);
        } else {
            const person = rows[0];
            console.log('Person details by name:');
            console.log(`Name: ${person.name}`);
            console.log(`Image: ${person.image}`);
        }
    } catch (err) {
        console.error('Error fetching person by name:', err);
        throw err;
    }
}

module.exports = { getPersonByName };
