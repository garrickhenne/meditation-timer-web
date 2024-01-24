import dotenv from 'dotenv';
import express from 'express';
import cookieSession from 'cookie-session';
import { checkMeditationsTableExists, createMeditationsTable } from './database/init.js';
import { createMeditationControl } from './controller/MeditationController.js';

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
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

// TODO: Refactor away to its own route file.
app.post('/meditation', async (req, res) => {
  const { secondsMeditated } = req.body;
  if (!secondsMeditated || secondsMeditated < 0) {
    return res.status(400).send('secondsMeditated is required');
  }

  try {
    await createMeditationControl(parseInt(secondsMeditated));

    return res.status(201).send({ message: 'Meditation created successfully.' });
  } catch (error) {
    console.log('Encountered error creating meditation:', error);
    return res.status(500).send('Encountered error creating meditation');
  }
});

app.listen(port, () => {
  // Check if AWS DynamoDB table 'Meditations' exists.
  checkMeditationsTableExists()
    .then(response => {
      let tables = response.TableNames;
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