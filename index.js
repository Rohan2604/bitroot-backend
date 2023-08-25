const { createConnection } = require('./mysqlConnection');
const { createPersonTable } = require('./createPersonTable');
const { createContactTable } = require('./createContactTable');
const { closeConnection } = require('./closeConnection');
const { createPerson } = require('./createPerson');
const { seedPersonData } = require('./seedPersonData');
const { deletePersonByName } = require('./deletePersonByName');
const { deletePersonById } = require('./deletePersonById');
const { updatePersonName } = require('./updatePersonName');
const { updatePersonImage } = require('./updatePersonImage');
const { getPersonById } = require('./getPersonById');
const { getPersonByName } = require('./getPersonByName');
const { getAllPersons } = require('./getAllPersons');
const { createContact } = require('./createContact');
const { seedContactData } = require('./seedContactData');
const { displayPersonWithContacts } = require('./displayPersonWithContacts');
const { displayPersonByPhoneNumber } = require('./displayPersonByPhoneNumber');
const { exportPersonDetailsToCSV } = require('./exportPersonDetailsToCSV');

async function main() {
    try {
        const connection = await createConnection();

        //await createPersonTable(connection);
        //await createContactTable(connection);
        
        //await createPerson(connection, 'Jane Doe'); // Example person creation
        //await seedPersonData(connection); // Seed 9 persons

        //await deletePersonByName(connection, 'John Doe'); // Delete by name
        //await deletePersonById(connection, 2); // Delete by ID

        //await updatePersonName(connection, 3, 'Rajiv Masand');
        //await updatePersonImage(connection, 2); // Update image for person with pid 2

        // await getPersonById(connection, 3); // Display person by ID
        // await getPersonByName(connection, 'John Doe'); // Display person by name
        // await getAllPersons(connection); // Display all persons

        // Add new contact for person with ID 3
        //await createContact(connection, 1, '1234567890', 3);

        //await seedContactData(connection); // Seed 50 contacts

        //await displayPersonWithContacts(connection, 'Rajiv Masand'); // Display details with contacts

        //await displayPersonByPhoneNumber(connection, '1234567890'); // Display person by phone number

        //await exportPersonDetailsToCSV(connection, 'person_details.csv'); // Export person details to CSV

        closeConnection(connection);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();
