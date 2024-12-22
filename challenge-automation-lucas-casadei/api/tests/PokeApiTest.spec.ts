import { test, expect } from '@playwright/test';
import { readTestData } from '../models/testDataReader';
import { encryptSecretKey } from '../utils/encryptor';
import axios from 'axios';

test.describe('PokeAPI Tests', () => {
  const testDataPath = './api/testData.xlsx';
  const testData = readTestData(testDataPath);

  for (const row of testData) {
    const [identifier] = row; 

    test(`Validate Pokemon API Response for ${identifier}`, async () => {
      const encryptedKey = encryptSecretKey();
      console.log(`Encrypted Key: ${encryptedKey}`);

      const startTime = Date.now();

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        // Assertions
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('name');
        expect(response.data).toHaveProperty('abilities');
        expect(responseTime).toBeLessThan(10000);

        console.log(`Test finished for ${identifier} at ${new Date().toISOString()}`);
      } catch (error: any) {
        console.error(`Error fetching data for ${identifier}: ${error.message}`);
        expect(error.response?.status).toBe(404);
      }
    });
  }
});
