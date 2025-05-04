const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());  // Middleware to parse JSON request body

// Handle the geolocation data from the client
app.post('/geolocation', (req, res) => {
    const { latitude, longitude } = req.body;
    
    // Here you can process or store the geolocation data
    console.log(`Received geolocation: Latitude: ${latitude}, Longitude: ${longitude}`);
    
    // Send a response back to the client
    res.json({ message: 'Geolocation received successfully!' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
