import axios from 'axios';
import { authData, signUpData } from '../interfaces';

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
