const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    const user = await User.findById('5cadd00e96b46f1decb9edb0');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main();