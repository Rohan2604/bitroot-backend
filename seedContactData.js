async function seedContactData(connection) {
    const contacts = [
        { cid: 2, contactnumber: '9876543210', pid: 3 },
        { cid: 3, contactnumber: '5555555555', pid: 3 },
        { cid: 4, contactnumber: '1112223333', pid: 4 },
        { cid: 5, contactnumber: '9998887777', pid: 5 },
        { cid: 6, contactnumber: '4444444444', pid: 6 },
        { cid: 7, contactnumber: '7777777777', pid: 7 },
        { cid: 8, contactnumber: '8888888888', pid: 8 },
        { cid: 9, contactnumber: '2223334444', pid: 9 },
        { cid: 10, contactnumber: '6666666666', pid: 10 },
        { cid: 11, contactnumber: '1234567891', pid: 5 },
        { cid: 12, contactnumber: '1234567892', pid: 4 },
        { cid: 13, contactnumber: '1234567895', pid: 9 },
        { cid: 14, contactnumber: '4444444445', pid: 6 },
        { cid: 15, contactnumber: '8888888889', pid: 8 },
    ];

    const insertContactQuery = `
        INSERT INTO Contact (cid, contactnumber, pid)
        VALUES (?, ?, ?);
    `;

    try {
        for (const contact of contacts) {
            await connection.query(insertContactQuery, [contact.cid, contact.contactnumber, contact.pid]);
            console.log(`Contact added: ${contact.contactnumber} for person with ID ${contact.pid}`);
        }
    } catch (err) {
        console.error('Error seeding contact data:', err);
        throw err;
    }
}

module.exports = { seedContactData };
