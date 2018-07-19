const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const humanRoutes = require('./routes/humans');
const elephantRoutes = require('./routes/elephants');

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/humans', humanRoutes);
app.use('/elephants', elephantRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message || 'An Error Occured' })
});

app.listen(PORT, () => {
  console.log('elephant sanctuary running on port ', PORT);
});
