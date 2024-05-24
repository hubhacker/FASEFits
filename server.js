const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('./database');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));

// Helper functions
const findUserByUsername = (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        callback(err, row);
    });
};

const createUser = (username, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return callback(err);
        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], function (err) {
            callback(err, this.lastID);
        });
    });
};

// Routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    findUserByUsername(username, (err, user) => {
        if (err) return res.json({ success: false, message: 'Error during login' });
        if (!user) return res.json({ success: false, message: 'Invalid username or password' });

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                req.session.user = user.username;
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid username or password' });
            }
        });
    });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    findUserByUsername(username, (err, user) => {
        if (err) return res.json({ success: false, message: 'Error during signup' });
        if (user) return res.json({ success: false, message: 'Username already taken' });

        createUser(username, password, (err) => {
            if (err) return res.json({ success: false, message: 'Error creating user' });
            req.session.user = username;
            res.json({ success: true });
        });
    });
});

app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/themeChoice.html');
    } else {
        res.redirect('/auth.html');
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
