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

export const getNFTWithSlugAPI = async (limit, collection_slug) => {
  const response = await axios.get(
    `${ENDPOINT_URL}/opensea/onlycollections?limit=${limit}&collection_slug=${collection_slug}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'fucking-ngrok',
      },
    }
  );
  return response.data;
};

export const getNFTDetailAPI = async (tx, token) => {
  const response = await axios.get(
    `${ENDPOINT_URL}/opensea?contractaddress=${tx}&tokenId=${token}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'fucking-ngrok',
      },
    }
  );

  return response.data;
};
