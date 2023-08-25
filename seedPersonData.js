module.exports = { seedPersonData };

async function seedPersonData(connection) {
    const persons = [
        { name: 'Jane Smith' },
        { name: 'Michael Johnson' },
        { name: 'Emily Wilson' },
        { name: 'William Brown' },
        { name: 'Olivia Davis' },
        { name: 'James Lee' },
        { name: 'Sophia Harris' },
        { name: 'Benjamin Patel' },
        { name: 'Mia Martin' }
        // Add more persons here...
    ];

    const insertPersonQuery = `
        INSERT INTO Person (name, image)
        VALUES (?, ?);
    `;

    try {
        // Dynamically import node-fetch
        const fetch = await import('node-fetch');

        for (const person of persons) {
            const randomImageId = Math.floor(Math.random() * 1000); // Generate a random image ID
            const imageUrl = `https://picsum.photos/200/300?image=${randomImageId}`; // Use Lorem Picsum for images

            await connection.query(insertPersonQuery, [person.name, imageUrl]);
            console.log(`Person added: ${person.name}`);
        }
    } catch (err) {
        console.error('Error seeding person data:', err);
        throw err;
    }
}

module.exports = { seedPersonData };
