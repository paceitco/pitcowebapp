module.exports = {
    apps: [
      {
        name: "pitcowebapp",
        script: "npx expo start --web",
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };