require('dotenv').config();
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const port = 3000;

app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/user', (req, res) => {
  res.send('user');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});