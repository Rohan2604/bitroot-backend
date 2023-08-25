async function createPerson(connection, name) {
    const insertPersonQuery = `
        INSERT INTO Person (name, image)
        VALUES (?, ?);
    `;

    const randomImageId = Math.floor(Math.random() * 1000); // Generate a random image ID
    const imageUrl = `https://picsum.photos/200/300?image=${randomImageId}`; // Use Lorem Picsum for images

    try {
        // Dynamically import node-fetch
        const fetch = await import('node-fetch');

        await connection.query(insertPersonQuery, [name, imageUrl]);
        console.log('Person added successfully');
    } catch (err) {
        console.error('Error adding person:', err);
        throw err;
    }
}

module.exports = { createPerson };
