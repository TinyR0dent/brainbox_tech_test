module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@": "./",
          "@components": "./components",
          "@screens": "./app/screens",
          "@hooks": "./hooks",
          "@types": "./types",
        },
      },
    ],
  ],
};
