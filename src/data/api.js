// data/api.js
import axios from 'axios';

const API_URL = 'https://api.example.com/sdg';

export async function getSDGs() {
  const response = await axios.get(`${API_URL}/sdgs`);
  return response.data;
}

export async function getTargets(sdgId) {
  const response = await axios.get(`${API_URL}/targets/${sdgId}`);
  return response.data;
}

export async function getIndicators(targetId) {
  const response = await axios.get(`${API_URL}/indicators/${targetId}`);
  return response.data;
}