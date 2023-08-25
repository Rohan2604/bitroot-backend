async function displayPersonByPhoneNumber(connection, phoneNumber) {
    const getPersonQuery = `
        SELECT Person.*, Contact.contactnumber
        FROM Person
        INNER JOIN Contact ON Person.pid = Contact.pid
        WHERE Contact.contactnumber = ?;
    `;

    try {
        const [rows] = await connection.query(getPersonQuery, [phoneNumber]);
        if (rows.length === 0) {
            console.log(`No person found with phone number ${phoneNumber}`);
        } else {
            const person = rows[0];
            console.log('Person details by phone number:');
            console.log(`Name: ${person.name}`);
            console.log(`Phone Number: ${person.contactnumber}`);
            console.log(`Image: ${person.image}`);
        }
    } catch (err) {
        console.error('Error fetching person details by phone number:', err);
        throw err;
    }
}

module.exports = { displayPersonByPhoneNumber };
