module.exports = (sequelize, Sequelize) => {
  const master_service_category = sequelize.define(
    "MASTER_SERVICE_CATEGORY",
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
      service_category_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      service_category_description: {
        type: Sequelize.TEXT,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    { freezeTableName: true }
  );
  return master_service_category;
};
