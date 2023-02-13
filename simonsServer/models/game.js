const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    state: { type: Array, required: true },
    score: { type: Number, required: true },
}, {
    timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
