async function createContact(connection, cid, contactnumber, pid) {
    const checkDuplicateQuery = `
        SELECT COUNT(*) AS count
        FROM Contact
        WHERE contactnumber = ?;
    `;

    const insertContactQuery = `
        INSERT INTO Contact (cid, contactnumber, pid)
        VALUES (?, ?, ?);
    `;


    try {
        // Check for duplicate contact number
        const [duplicateRows] = await connection.query(checkDuplicateQuery, [contactnumber]);
        if (duplicateRows[0].count > 0) {
            console.log('Duplicate contact number. Contact not added.');
            return;
        }

        // Insert contact
        await connection.query(insertContactQuery, [cid, contactnumber, pid]);
        console.log('Contact added successfully');
    } catch (err) {
        console.error('Error adding contact:', err);
        throw err;
    }
}

module.exports = { createContact };
