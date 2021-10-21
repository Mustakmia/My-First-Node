const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000;
// const handler = (req, res) => {
//     res.send('Hellow from node');
// }
app.get('/', (req, res) => {
    res.send('Hellow from node & express wow');
});
const users = [
    { id: 1, name: 'abul', phn: 110 },
    { id: 1, name: 'abul', phn: 110 },
    { id: 1, name: 'abul', phn: 110 },
    { id: 1, name: 'abul', phn: 110 }
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