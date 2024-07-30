const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // Handle login logic
    res.send('Login successful');
});

app.post('/signup', (req, res) => {
    // Handle signup logic
    res.send('Signup successful');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
