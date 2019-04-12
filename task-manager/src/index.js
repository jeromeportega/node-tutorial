const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Bring in mongoose DB
require('./db/mongoose');

// Import Routes
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());

// Use routes in the Express application
app.use(userRouter);
app.use(taskRouter);

// Start the server.
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
