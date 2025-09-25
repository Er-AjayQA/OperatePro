module.exports = (sequelize, Sequelize) => {
  const master_ticket_category = sequelize.define(
    "MASTER_TICKET_CATEGORY",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      ticket_category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ticket_category_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ticket_category_priority: {
        type: Sequelize.STRING,
      },
      ticket_category_description: {
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
  return master_ticket_category;
};
