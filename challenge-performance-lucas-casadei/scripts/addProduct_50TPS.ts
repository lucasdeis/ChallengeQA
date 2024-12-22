import http from 'k6/http';
import { check, sleep } from 'k6';
import { generateJWT } from './auth.js';
import { BASE_URL, HEADERS } from '../utils/config.js';
import { generateUniqueTitle } from '../utils/helpers.js';

export const options = {
  stages: [
    { duration: '1m', target: 50 },
    { duration: '1m', target: 50 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  const token = generateJWT();
  const payload = JSON.stringify({
    title: generateUniqueTitle(),
    price: Math.random() * 100,
  });

  const headers = { ...HEADERS, Authorization: token };
  const response = http.post(`${BASE_URL}/products/add`, payload, { headers });

  check(response, {
    'Product added successfully': (r) => r.status === 200,
    'Response time < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1);
}
