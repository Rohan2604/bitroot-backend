function closeConnection(connection) {
    console.log('Closing the connection...');
    connection.end((err) => {
        if (err) {
            console.error('Error closing connection:', err);
        } else {
            console.log('Connection closed');
        }
    });
}

module.exports = { closeConnection };

