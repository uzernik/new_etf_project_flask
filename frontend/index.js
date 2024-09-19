const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));  // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
