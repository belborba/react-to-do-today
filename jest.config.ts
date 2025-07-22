import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-tests.ts"],
  testMatch: ["<rootDir>/src//*.test.{ts,tsx}"],
  collectCoverageFrom: ["src//.{ts,tsx}", "!src//.d.ts", "!src/main.tsx"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        diagnostics: { ignoreCodes: ["TS151001"] },
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
};

export default config;
