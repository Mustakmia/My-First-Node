const cors = require('cors')
const { query } = require('express');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
// const handler = (req, res) => {
//     res.send('Hellow from node');
// }
app.get('/', (req, res) => {
    res.send('Hellow from node & express wow');
});
const users = [
    { id: 0, name: 'abul', email: 'abc@gmail.com', phn: 120, age: 21, home: 'barishal', job: 'phero', salary: 200 },
    { id: 1, name: 'babul', email: 'abcd@gmail.com', phn: 130, age: 22, home: 'barishal', job: 'phero', salary: 200 },
    { id: 2, name: 'kabul', email: 'abcde@gmail.com', phn: 140, age: 23, home: 'barishal', job: 'phero', salary: 200 },
    { id: 3, name: 'habul', email: 'abcdef@gmail.com', phn: 150, age: 24, home: 'barishal', job: 'phero', salary: 200 },
    { id: 4, name: 'tabul', email: 'abcdefg@gmail.com', phn: 160, age: 25, home: 'barishal', job: 'phero', salary: 200 }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    }

});

// App method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hiting the post', req.body);
    // res.send(JSON.stringify(newUser));
    // shortcut
    res.json(newUser)
});

// dynamic api
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
});
app.get('/fruit/mangos/lengra', (req, res) => {
    res.send('testy testy lengra');
})
app.listen(port, () => {
    console.log('Listening to port', port);
});