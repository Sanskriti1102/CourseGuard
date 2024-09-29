const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

const secretKey = "something";

app.get('/', (req, res) => {
    res.render('signin'); 
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simulated learner object
    const learner = {
        email: "courseguard",
        pass: "pass@123"
    };

    if (email === learner.email && password === learner.pass) {
        // Generate token
        const token = jwt.sign(learner, secretKey);
        return res.json({ success: true, token });
    } else {
        return res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Global error handler
app.use(function errorHandler(err, req, res, next) {
    res.status(500).render('error', { error: err });
});

app.listen(3333, () => {
    console.log("Server running on port 3333");
});
