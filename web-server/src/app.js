const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/help', (req, res) => {
    res.send('You are at the HELP route.');
});

app.get('/about', (req, res) => {
    res.send('You are at the ABOUT route.');
});

app.get('/weather', (req, res) => {
    res.send('Your weather');
});

app.listen(PORT, () => {
    console.log('Server is up on port 3000.');
});