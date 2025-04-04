const express = require('express');
const app = express();
const port = 3002; // Using 3002 to avoid conflicts with Tasks 1 and 2

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., CSS)
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve the page
app.get('/', (req, res) => {
    res.render('index', { message: null });
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const message = `Submitted: Name - ${name}, Email - ${email}`;
    res.render('index', { message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});