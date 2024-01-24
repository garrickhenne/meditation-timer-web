require('dotenv').config();
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const { createMeditationsTable, checkMeditationsTableExists } = require('./database/init');
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
  // Check if AWS DynamoDB table 'Meditations' exists.
  checkMeditationsTableExists()
    .then(response => {
      tables = response.TableNames;
      if (!tables.includes('Meditations')) {
        console.log('Meditations table does not exist. Creating...');
        return createMeditationsTable();
      }
      console.log('Meditations table exists, continue server startup.');
      return;
    })
    .then(() => {
      console.log(`App listening at http://localhost:${port}`);
    })
    .catch(err => {
      console.log('Encountered error on server startup:', err);
    });
});