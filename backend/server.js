const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Test */
app.get('/', (req, res) => {
  res.send('Backend works yay');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

let submissions = [];

/* POST route backend part */
app.post('/submit-artwork', (req, res) => {
  const { title, artist, category, price, description } = req.body;

  /* Submission info */
  submissions.push({
    title,
    artist,
    category,
    price,
    description
  });

  /* Confirm */
  res.send(`Artwork "${title}" submitted successfully!`);
});

app.get('/submissions', (req, res) => {
  res.json(submissions);
});

app.get('/my-submissions', (req, res) => {
  let html = `
    <h1>My Pending Submissions</h1>
    <ul>
  `;

  /* Submission cont. */
  submissions.forEach((s, index) => {
    html += `
      <li>
        <strong>${s.title || "(no title)"}</strong><br>
        Artist: ${s.artist || "(no artist)"}<br>
        Category: ${s.category || "(no category)"}<br>
        Price: ${s.price || "(no price)"}<br>
        Description: ${s.description || "(no description)"}
      </li><br>
    `;
  });

  html += `</ul>`;
  res.send(html);
});
