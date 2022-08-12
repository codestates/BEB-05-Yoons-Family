import axios from 'axios';
import { ENDPOINT_URL } from '.';

export const getCollectionListAPI = async (limit) => {
  const response = await axios.get(
    `${ENDPOINT_URL}/opensea?collectionoffset=0&collectionlimit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'fucking-ngrok',
      },
    }
  );

  return response.data;
};

export const getCollectionDatailsAPI = async (slug) => {
  const response = await axios.get(`${ENDPOINT_URL}/opensea?collection_slug=${slug}`, {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'fucking-ngrok',
    },
  });

  return response.data;
};
