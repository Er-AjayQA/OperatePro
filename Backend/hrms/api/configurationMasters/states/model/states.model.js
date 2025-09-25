module.exports = (sequelize, Sequelize) => {
  const master_state = sequelize.define(
    "MASTER_STATE",
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
      state_code: {
        type: Sequelize.STRING,
        allowNull: true,
        set(value) {
          this.setDataValue("state_code", value === "" ? null : value);
        },
      },
    },
    { freezeTableName: true }
  );
  return master_state;
};
