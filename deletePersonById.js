async function deletePersonById(connection, pid) {
    const deletePersonQuery = `
        DELETE FROM Person
        WHERE pid = ?;
    `;

    try {
        const [result] = await connection.query(deletePersonQuery, [pid]);
        if (result.affectedRows > 0) {
            console.log(`Person with ID ${pid} deleted successfully`);
        } else {
            console.log(`Person with ID ${pid} not found`);
        }
    } catch (err) {
        console.error('Error deleting person by ID:', err);
        throw err;
    }
}

module.exports = { deletePersonById };
