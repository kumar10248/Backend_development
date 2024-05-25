const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./models/student'); // Import the Student model
const loginrout = require("./Routes/loginRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
require('./connection');

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Login routes
app.use('/', loginrout);

// Route to get students by section, group, and name
app.get('/students', async (req, res) => {
  try {
    const { section, group, name } = req.query;
    let query = {};

    if (section) {
      query.section = section;
    }

    if (group) {
      query.group = group;
    }

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    const students = await Student.find(query);
    res.json(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
