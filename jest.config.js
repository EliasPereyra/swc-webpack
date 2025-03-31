/** @type {import('jest').Config} */

import path from "node:path";

const dirname = import.meta.dirname;
const srcPath = path.join(dirname, "src");

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
