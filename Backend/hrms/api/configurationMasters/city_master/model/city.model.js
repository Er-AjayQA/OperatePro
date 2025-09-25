module.exports = (sequelize, Sequelize) => {
  const master_city = sequelize.define(
    "MASTER_CITY",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  return master_city;
};
