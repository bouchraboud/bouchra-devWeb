const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());


const Users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Received login request:', { username, password });

   
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('Login successful:', user);
        res.status(200).json({ message: 'Login successful' });
    } else {
        console.log('Invalid credentials:', { username, password });
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
