module.exports = {
    apps: [
      {
        name: "pitcowebapp",
        script: "npx expo start --web",
        // args: "build 8081 --spa",
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };