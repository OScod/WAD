const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('/Users/omkar/OneDrive/Documents/WAD/5/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
