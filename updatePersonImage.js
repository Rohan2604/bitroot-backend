async function updatePersonImage(connection, pid) {
    const updateImageQuery = `
        UPDATE Person
        SET image = ?
        WHERE pid = ?;
    `;

    const randomImageId = Math.floor(Math.random() * 1000); // Generate a random image ID
    const imageUrl = `https://picsum.photos/200/300?image=${randomImageId}`; // Use Lorem Picsum for images

    try {
        // Dynamically import node-fetch
        const fetch = await import('node-fetch');

        await connection.query(updateImageQuery, [imageUrl, pid]);
        console.log(`Person image updated for pid ${pid}`);
    } catch (err) {
        console.error('Error updating person image:', err);
        throw err;
    }
}

module.exports = { updatePersonImage };
