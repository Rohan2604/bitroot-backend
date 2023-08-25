const fs = require('fs');
const csv = require('fast-csv');

async function exportPersonDetailsToCSV(connection, filename) {
    const exportQuery = `
        SELECT Person.*, Contact.contactnumber
        FROM Person
        LEFT JOIN Contact ON Person.pid = Contact.pid;
    `;

    try {
        const [rows] = await connection.query(exportQuery);

        const data = rows.map(row => ({
            Name: row.name,
            Image: row.image,
            'Contact Number': row.contactnumber
        }));

        const csvStream = csv.format({ headers: true });
        const writableStream = fs.createWriteStream(filename);
        csvStream.pipe(writableStream);
        
        data.forEach(item => csvStream.write(item));
        
        csvStream.end();
        
        console.log(`Person details exported to ${filename}`);
    } catch (err) {
        console.error('Error exporting person details:', err);
        throw err;
    }
}

module.exports = { exportPersonDetailsToCSV };
