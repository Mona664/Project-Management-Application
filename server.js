const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// A simple GET route for the root URL
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});