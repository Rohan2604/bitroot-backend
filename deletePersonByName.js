async function deletePersonByName(connection, name) {
    const deletePersonQuery = `
        DELETE FROM Person
        WHERE name = ?;
    `;

    try {
        const [result] = await connection.query(deletePersonQuery, [name]);
        if (result.affectedRows > 0) {
            console.log(`Person with name ${name} deleted successfully`);
        } else {
            console.log(`Person with name ${name} not found`);
        }
    } catch (err) {
        console.error('Error deleting person by name:', err);
        throw err;
    }
}

module.exports = { deletePersonByName };
