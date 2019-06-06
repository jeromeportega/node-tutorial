const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});