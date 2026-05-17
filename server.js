const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    console.log("recebi",req.body);
    const task = {
        id: id++,
        text: req.body.text
    };

    tasks.push(task);
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ ok: true });
});

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});