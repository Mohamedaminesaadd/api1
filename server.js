const http = require('http');

const server = http.createServer((req, res) => {
    // Example data (hardcoded)
    const data = {
        latitude: 48.8566,
        longitude: 2.3522
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
