const express = require('express');
const app = express();
app.use(express.json);
let users = [
//   { id: 1, name: 'User1', email: 'user1@gmail.com' },
//   { id: 2, name: 'User2', email: 'user2@gmail.com' },
//   { id: 3, name: 'User3', email: 'user3@gmail.com' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', (req, res) => {
    const data = req.body;
    const newid = users.length>0?users[users.length-1].id+1:1;
    data.id = newid;
    users.push(data);
    res.status(200).json({message: 'data recieved!', data:data});
});


app.listen(9002, () => {
    console.log('Server running on port 9002');
});