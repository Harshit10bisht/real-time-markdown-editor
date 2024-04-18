const express = require('express');
const cors = require('cors');
const marked = require('marked');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post('/home', (req, res) => {
  const { markedText } = req.body;
  // DEBUG console.log("MARKED REACT TEXT : ", markedText);
  if (!markedText) {
    return res.status(400).send('Markdown text is required');
  }

  try {
    const html = marked.parse(markedText);
    // DEBUG console.log(html);
    res.send(html);
  }
  catch (error) {
    console.error('Error converting Markdown to HTML:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
})