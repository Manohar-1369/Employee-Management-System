export const API_BASE_URL = 'https://69f88de6f7044aa0103e08b5.mockapi.io/api/assignment/:endpoint';

export const getEndpoint = (endpoint) => {
  return API_BASE_URL.replace(':endpoint', endpoint);
};

export default {
  API_BASE_URL,
  getEndpoint
};
