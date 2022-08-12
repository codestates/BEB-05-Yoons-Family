import axios from 'axios';
import { ENDPOINT_URL } from '.';

export const getNFTAPI = async (limit) => {
  const response = await axios.get(`${ENDPOINT_URL}/opensea?limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'fucking-ngrok',
    },
  });

  return response.data;
};
