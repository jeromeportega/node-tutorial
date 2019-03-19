const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2d10c24084c9087b75fa2324392255d1/${latitude},${longitude}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services.');
        } else if (response.body.error) {
            callback('Unable to find location, please try another search.', undefined);
        } else {
            console.log(response.body);
            callback(undefined, {
                temperature: response.body.currently.temperature,
                summary: response.body.daily.summary,
            });
        }
    });
}

module.exports = forecast;