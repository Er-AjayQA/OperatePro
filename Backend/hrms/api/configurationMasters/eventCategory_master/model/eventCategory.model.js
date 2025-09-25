module.exports = (sequelize, Sequelize) => {
  const master_event_category = sequelize.define(
    "MASTER_EVENT_CATEGORY",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      event_category_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_category_description: {
        type: Sequelize.TEXT,
        allowNull: false,
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
  return master_event_category;
};
