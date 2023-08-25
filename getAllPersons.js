async function getAllPersons(connection) {
    const getAllPersonsQuery = `
        SELECT *
        FROM Person;
    `;

    try {
        const [rows] = await connection.query(getAllPersonsQuery);
        if (rows.length === 0) {
            console.log('No persons found');
        } else {
            console.log('All persons:');
            for (const person of rows) {
                console.log(`Name: ${person.name}`);
                console.log(`Image: ${person.image}`);
                console.log('---');
            }
        }
    } catch (err) {
        console.error('Error fetching all persons:', err);
        throw err;
    }
}

module.exports = { getAllPersons };
