module.exports = (sequelize, Sequelize) => {
  const hrms_userAllowance_master = sequelize.define(
    "HRMS_USER_ALLOWANCE_MASTER",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      uniqueCode: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    { freezeTableName: true }
  );
  return hrms_userAllowance_master;
};
