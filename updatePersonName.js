async function updatePersonName(connection, pid, newName) {
    const updatePersonNameQuery = `
        UPDATE Person
        SET name = ?
        WHERE pid = ?;
    `;

    try {
        const [result] = await connection.query(updatePersonNameQuery, [newName, pid]);
        if (result.affectedRows > 0) {
            console.log(`Person with ID ${pid} updated successfully`);
        } else {
            console.log(`Person with ID ${pid} not found`);
        }
    } catch (err) {
        console.error('Error updating person\'s name:', err);
        throw err;
    }
}

module.exports = { updatePersonName };
