module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-navigation|expo|expo-.*|@expo|@unimodules|unimodules-.*|sentry-expo|native-base|react-native-gesture-handler)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/app/components/$1",
    "^@screens/(.*)$": "<rootDir>/app/screens/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@types/(.*)$": "<rootDir>/types/$1",
    "^@/(.*)$": "<rootDir>/$1",
    "react-native-gesture-handler":
      "<rootDir>/__mocks__/react-native-gesture-handler.js",
  },
};
