const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2d10c24084c9087b75fa2324392255d1/${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.');
        } else if (body.error) {
            callback('Unable to find location, please try another search.', undefined);
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                summary: body.daily.summary,
            });
        }
    });
}

module.exports = forecast;