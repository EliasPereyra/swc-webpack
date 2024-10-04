/** @type {import('jest').Config} */

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "src");

export default {
  transform: {
    "^.+\\.jsx?$": "@swc/jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": `${srcPath}/$1`,
    "\\.(css|less|sass|scss)$": `${srcPath}/__mocks__/styleMock.cjs`,
  },
};
