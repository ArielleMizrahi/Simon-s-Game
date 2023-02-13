const Game = require('../models/game');

// Show the current game state
exports.getCurrentGame = (req, res, next) => {
  Game.find({}, (err, game) => {
    if (err) {
      return next(err);
    }
    res.json(game);
  });
};

// Start a new game
exports.startNewGame = (req, res, next) => {
  const game = new Game({
    currentLevel: 1,
    score: 0
  });

  game.save((err, game) => {
    if (err) {
      return next(err);
    }
    res.json(game);
  });
};

// Update the game state
exports.updateGame = (req, res, next) => {
  const gameId = req.params.id;
  const updates = req.body;

  Game.findByIdAndUpdate(gameId, updates, (err, game) => {
    if (err) {
      return next(err);
    }
    res.json(game);
  });
};
