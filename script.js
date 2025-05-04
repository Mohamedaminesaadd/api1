window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('position').textContent =
                    `Latitude : ${latitude}, Longitude : ${longitude}`;
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
