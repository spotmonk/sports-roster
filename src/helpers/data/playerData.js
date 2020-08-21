import axios from 'axios';
import apikeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apikeys.firebaseConfig.databaseURL;

const getPlayersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.responseToArray(data)))
    .catch((err) => reject(err));
});

const deletePlayerById = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

export default { getPlayersByUid, deletePlayerById };
