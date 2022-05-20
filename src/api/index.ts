import axios from 'axios';
import { authData, CatchPokemon, CreateUserSettingsData, signUpData, WhoIsThatType } from '../interfaces';

const BASE_URL = process.env.REACT_APP_URL || 'http://10.0.0.107:5000';

// eslint-disable-next-line no-unused-vars
function createConfig (token: string) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export async function signUp (data: signUpData) {
  await axios.post(`${BASE_URL}/auth/signup`, { ...data });
}

export async function signIn (data: authData) {
  const signInData = await axios.post(`${BASE_URL}/auth/login`, { ...data });
  return signInData.data;
}

export async function saveSettings (token: string, data: CreateUserSettingsData) {
  const config = createConfig(token);

  await axios.post(`${BASE_URL}/auth/settings`, { ...data }, config);
}

export async function deleteSettings (token: string) {
  const config = createConfig(token);

  await axios.delete(`${BASE_URL}/auth/settings`, config);
}

export async function catchPokemon (token: string, catchPokemon: CatchPokemon) {
  const config = createConfig(token);

  await axios.post(`${BASE_URL}/game/pokemon`, catchPokemon, config);
}

export async function randomPokemon (token: string) {
  const config = createConfig(token);

  const pokemonData = await axios.get(`${BASE_URL}/game/pokemon`, config);

  const pokemon: WhoIsThatType = pokemonData.data;

  return pokemon;
}

export async function getLives (token: string) {
  const config = createConfig(token);

  const lives = await axios.get(`${BASE_URL}/game/lives`, config);

  return lives;
}
