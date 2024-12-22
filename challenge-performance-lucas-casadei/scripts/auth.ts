import http from 'k6/http';
import { check } from 'k6';

export function generateJWT(): string {
  const url = 'https://dummyjson.com/auth/login';
  const payload = JSON.stringify({
    username: 'emilys',
    password: 'emilyspass',
  });

  const headers = { 'Content-Type': 'application/json' };
  const response = http.post(url, payload, { headers });

  check(response, {
    'JWT generated successfully': (r) => r.status === 200,
  });

  const body = response.body as string;
  const token = JSON.parse(body).token;

  return `Bearer ${token}`;
}
