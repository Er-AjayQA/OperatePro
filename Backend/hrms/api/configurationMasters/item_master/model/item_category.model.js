module.exports = (sequelize, Sequelize) => {
  const master_item_category = sequelize.define(
    "MASTER_ITEM_CATEGORY",
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
      item_category_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_category_description: {
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
  return master_item_category;
};
