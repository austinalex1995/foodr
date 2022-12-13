import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:1234@cluster0.ccj6h.mongodb.net/foodr?retryWrites=true&w=majority';

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
  //useNewUrlParse: true,
  //useCreateIndex: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/foodr/cards', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

app.get('/foodr/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/foodr/swiperight', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('foodr/swiperight', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => console.log('listening on localhost: ' + port));
