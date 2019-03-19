import { request } from "http";

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiamVyb21lcG9ydGVnYSIsImEiOiJjanQ1cDEybmEwNXRwNDN0YjA1M2g3emNoIn0.xlO9OJlBqOgj5vPCnVHoQQ`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect to location service!')
        } else if (response.body.message) {
            console.log(response.body.message);
        } else {
            const longitude = response.body.features[0].center[0];
            const latitude = response.body.features[0].center[1];

            console.log(longitude, latitude);
        }
    });
}

geocode('New York', (error, data) => {

});