module.exports = {
    apps: [
      {
        name: "pitcowebapp",
        script: "start",
        args: "build 8081 --spa",
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };