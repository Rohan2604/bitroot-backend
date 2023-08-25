async function displayPersonWithContacts(connection, personName) {
    const getPersonQuery = `
        SELECT Person.*, Contact.contactnumber
        FROM Person
        INNER JOIN Contact ON Person.pid = Contact.pid
        WHERE Person.name = ?;
    `;

    const getContactsQuery = `
        SELECT *
        FROM Contact
        WHERE pid = ?;
    `;

    try {
        // Get person details
        const [personRows] = await connection.query(getPersonQuery, [personName]);
        if (personRows.length === 0) {
            console.log(`Person with name ${personName} not found`);
            return;
        }
        const person = personRows[0];
        
        console.log('Person details:');
        console.log(`Name: ${person.name}`);
        console.log(`Image: ${person.image}`);

        // Get associated contacts
        const [contactsRows] = await connection.query(getContactsQuery, [person.pid]);
        if (contactsRows.length === 0) {
            console.log(`No contacts found for ${personName}`);
        } else {
            console.log('Associated contacts:');
            for (const contact of contactsRows) {
                console.log(`Contact Number: ${contact.contactnumber}`);
            }
        }
    } catch (err) {
        console.error('Error fetching person details with contacts:', err);
        throw err;
    }
}

module.exports = { displayPersonWithContacts };
