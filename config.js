// config.js
// Project Nova — app configuration

const config = {
  appName: "Project Nova",
  version: "1.0.0",
  port: 3000,
  database: {
    host: "localhost",
    port: 5432,
    name: "nova_db",
  },
  auth: {
    sessionTimeout: 3600,
    maxLoginAttempts: 5,
  },
};

module.exports = config;