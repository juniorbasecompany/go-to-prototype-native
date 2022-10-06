import { API_KEY } from '@env';

export const header = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
  'api-key': API_KEY,
};
