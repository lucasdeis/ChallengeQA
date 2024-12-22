import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

// Load .env file
dotenv.config();

export const encryptSecretKey = (): string => {
  const SECRET_KEY = process.env.SECRET_KEY!;
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined in the environment variables.');
  }

  const hash = crypto.createHash('sha256');
  hash.update(SECRET_KEY);
  return hash.digest('hex');
};
