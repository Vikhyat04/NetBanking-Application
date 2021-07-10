module.exports = {
    HOST: "http://localhost:3306",
    USER: "root",
    PASSWORD: "1234",
    DB: "sample",
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  