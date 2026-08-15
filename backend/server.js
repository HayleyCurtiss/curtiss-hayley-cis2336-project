const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Test */
app.get('/', (req, res) => {
  res.send('Backend works yay');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


