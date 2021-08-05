const dbConfig = require("../database/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.sample_1 = require("./SampleModel1.js")(sequelize, Sequelize);
db.userDetails1 = require("./UserDetails1.js")(sequelize, Sequelize);
db.userAmountDetails = require("./UserAmountDetails.js")(sequelize, Sequelize);
db.txnDetails = require("./TxnDetails.js")(sequelize, Sequelize);



module.exports=db;

