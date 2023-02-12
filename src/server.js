const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/game-state', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the game state schema
const gameStateSchema = new mongoose.Schema({
  score: Number,
  buttonOrder: [Number]
});

// Create the game state model
const GameState = mongoose.model('GameState', gameStateSchema);

// Generate the initial random order of button presses
const generateRandomOrder = () => {
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

// Get the current game state
app.get('/game-state', (req, res) => {
  GameState.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else if (!data.length) {
      // If there is no existing game state, create a new one with initial values
      const initialState = new GameState({ score: 0, buttonOrder: generateRandomOrder() });
      initialState.save((error) => {
        if (error) {
          res.send(error);
        } else {
          res.send(initialState);
        }
      });
    } else {
      res.send(data[0]);
    }
  });
});

// Update the game state with the new score
app.put('/game-state/:id', (req, res) => {
  GameState.findByIdAndUpdate(req.params.id, { score: req.body.score }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
