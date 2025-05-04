window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('position').textContent =
                    `Latitude : ${latitude}, Longitude : ${longitude}`;

                // Send geolocation data to the server
                fetch('https://api-geo-ze7b.onrender.com/geolocation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        latitude: latitude,
                        longitude: longitude
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Geolocation data sent successfully', data);
                })
                .catch(error => {
                    console.error('Error sending geolocation data:', error);
                });
            },
            function(error) {
                document.getElementById('position').textContent =
                    `Erreur : ${error.message}`;
            }
        );
    } else {
        document.getElementById('position').textContent =
            "La géolocalisation n'est pas supportée par ce navigateur.";
    }
};
