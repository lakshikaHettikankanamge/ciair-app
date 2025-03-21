const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist/ciair')));

// Redirect all routes to index.html (Angular handles routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ciair/index.html'));
});

// Define the port Heroku will use
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
