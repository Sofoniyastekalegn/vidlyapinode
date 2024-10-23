const express = require('express');
const { resolve } = require('path');
const Joi = require('joi');
const app = express();
app.use(express.json());

const app = express();

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
