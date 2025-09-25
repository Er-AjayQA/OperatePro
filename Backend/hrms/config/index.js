// ********************** Import Statements ********************** //
const dbConfig = require("./db.config");
const Sequelize = require("sequelize");

// ********************** DB Configurations ********************** //
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// ********************** Import Models ********************** //
const db = {
  Sequelize,
  sequelize,
  ...require("./modelsRegistration")(sequelize, Sequelize),
};

// Load relations after all models are registered
require("./modelRelations/aggeragateRelations")(db);

// ========== EXPORTS ========== //
module.exports = db;
