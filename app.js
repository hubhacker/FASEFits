const express = require('express');
const db = require('./db_connection.js');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));

// Sample user data 
const users = {
    user1: 'password1',
    user2: 'password2'
};

const login = 
`SELECT user_id from user WHERE username = ? AND password = ?`

app.post('/login', (req, res) => {
    const { username, password } = req.body;


    db.execute(login, [req.body.username, req.body.password], (err, result) => {
        if (users[username] && users[username] === password) {
            req.session.user = username;
            res.json({ success: true });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});

// query db

const createUser = `
INSERT INTO user (username, password)
VALUES (?, ?) 
`

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    //console.log(username + ' ' + password);
    db.execute(createUser, [req.body.username, req.body.password], (err, result) => {
        if (users[username]) {
            res.json({ success: false, message: 'Username already taken' });
        } else {
            users[username] = password;
            req.session.user = username;
            res.json({ success: true });
        }
    })  
});

app.get('/', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname+'/views/initial.html');
    } else {
        res.sendFile(__dirname+'/views/auth.html');
    }
});

app.use(express.static('style'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
