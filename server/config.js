const config = {
  port: process.env.PORT || 3000,
  secretKeyBase: process.env.SECRET_KEY_BASE,
  secureConnection: true
};

const envConfig = {
  development: {
    secureConnection: false,
    database: {
      username: 'root',
      password: null,
      name: 'mern_development',
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  },
  test: {
    database: {
      username: 'root',
      password: null,
      name: 'database_test',
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  },
  production: {
    database: {
      username: 'root',
      password: null,
      name: 'database_production',
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  }
};

module.exports = Object.assign(config, envConfig[process.env.NODE_ENV]);
