module.exports = (sequelize, Sequelize) => {
  const master_item_specification = sequelize.define(
    "MASTER_ITEM_SPECIFICATION",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spec_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      spec_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true }
  );
  return master_item_specification;
};
