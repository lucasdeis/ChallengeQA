"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const testDataReader_1 = require("../models/testDataReader");
const encryptor_1 = require("../utils/encryptor");
const axios = require('axios');
test_1.test.describe('PokeAPI Tests', () => {
    const testDataPath = './api/testData.xlsx';
    const testData = (0, testDataReader_1.readTestData)(testDataPath);
    for (const row of testData) {
        const [identifier] = row; // Assumes the first column is ID or name
        (0, test_1.test)(`Validate Pokemon API Response for ${identifier}`, () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const encryptedKey = (0, encryptor_1.encryptSecretKey)();
            console.log(`Encrypted Key: ${encryptedKey}`);
            const startTime = Date.now();
            try {
                const response = yield axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
                const endTime = Date.now();
                const responseTime = endTime - startTime;
                // Assertions
                (0, test_1.expect)(response.status).toBe(200);
                (0, test_1.expect)(response.data).toHaveProperty('id');
                (0, test_1.expect)(response.data).toHaveProperty('name');
                (0, test_1.expect)(response.data).toHaveProperty('abilities');
                (0, test_1.expect)(responseTime).toBeLessThan(10000);
                console.log(`Test finished for ${identifier} at ${new Date().toISOString()}`);
            }
            catch (error) {
                console.error(`Error fetching data for ${identifier}: ${error.message}`);
                (0, test_1.expect)((_a = error.response) === null || _a === void 0 ? void 0 : _a.status).toBe(404);
            }
        }));
    }
});
