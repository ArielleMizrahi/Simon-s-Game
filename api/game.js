import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/game';

export const startGame = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/start`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentRound = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/currentRound`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const submitRound = async (round) => {
  try {
    const res = await axios.post(`${BASE_URL}/submitRound`, { round });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHighScores = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/highScores`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
