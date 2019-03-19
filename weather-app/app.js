const request = require('request');

// const url = 'https://api.darksky.net/forecast/2d10c24084c9087b75fa2324392255d1/37.8267,-122.4233';

// request({
//     url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find user location.');
//     } else {
//         const currently = response.body.currently;

//         console.log(response.body.daily.data[0].summary);
//         console.log(`It is currently ${currently.temperature} degrees out.  There is a ${currently.precipProbability * 100}% chance of rain.`);
//     }
// });