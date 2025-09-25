// ********************** Exporting Models ********************** //
module.exports = (sequelize, Sequelize) => {
  const db = {};

  // ======= Entity Configuration Model ======= //
  db.ENTITY_CONFIGURATION =
    require("../api/entityManagement/entityConfiguration/model/entityConfig.model")(
      sequelize,
      Sequelize
    );

  // ======= HRMS Users Model ======= //
  db.HRMS_USER = require("../api/user/model/user.model")(sequelize, Sequelize);

  // ======= Master Department Models ======= //
  db.MASTER_DEPARTMENT =
    require("../api/configurationMasters/department/model/department.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Designation Models ======= //
  db.MASTER_DESIGNATION =
    require("../api/configurationMasters/designation/model/designation.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Allowance Models ======= //
  db.MASTER_ALLOWANCE =
    require("../api/configurationMasters/allowance/model/allowance.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Area Models ======= //
  db.MASTER_AREA = require("../api/configurationMasters/area/model/area.model")(
    sequelize,
    Sequelize
  );

  // ======= Master Bank Models ======= //
  db.MASTER_BANK =
    require("../api/configurationMasters/bank_master/model/bank_master.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Branch Models ======= //
  db.BRANCH_MASTER =
    require("../api/configurationMasters/branch_master/model/branch.model")(
      sequelize,
      Sequelize
    );

  // ======= Master City Models ======= //
  db.MASTER_CITY =
    require("../api/configurationMasters/city_master/model/city.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Contract Type Models ======= //
  db.MASTER_CONTRACT_TYPE =
    require("../api/configurationMasters/contractType/model/contractType.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Country Models ======= //
  db.MASTER_COUNTRY =
    require("../api/configurationMasters/country/model/country.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Course Category Models ======= //
  db.MASTER_COURSE_CATEGORY =
    require("../api/configurationMasters/courseCategory_master/model/courseCategory.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Employment Type Models ======= //
  db.MASTER_EMPLOYMENT_TYPE =
    require("../api/configurationMasters/employmentType/model/employmentType.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Event Category Models ======= //
  db.MASTER_EVENT_CATEGORY =
    require("../api/configurationMasters/eventCategory_master/model/eventCategory.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Item Category Models ======= //
  db.MASTER_ITEM_CATEGORY =
    require("../api/configurationMasters/item_master/model/item_category.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Item Specification Models ======= //
  db.MASTER_ITEM_SPECIFICATION =
    require("../api/configurationMasters/item_master/model/item_specification.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Item Models ======= //
  db.MASTER_ITEM =
    require("../api/configurationMasters/item_master/model/item_master.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Role Models ======= //
  db.MASTER_ROLE =
    require("../api/configurationMasters/role_master/model/role.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Service Category Models ======= //
  db.MASTER_SERVICE_CATEGORY =
    require("../api/configurationMasters/service_master/model/service_category.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Service Models ======= //
  db.MASTER_SERVICE =
    require("../api/configurationMasters/service_master/model/service_master.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Shift Models ======= //
  db.MASTER_SHIFT =
    require("../api/configurationMasters/shift_master/model/shift.model")(
      sequelize,
      Sequelize
    );

  // ======= Master State Models ======= //
  db.MASTER_STATE =
    require("../api/configurationMasters/states/model/states.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Ticket Category Models ======= //
  db.MASTER_TICKET_CATEGORY =
    require("../api/configurationMasters/ticket_category_master/model/ticket_category.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Transfer Reason Models ======= //
  db.MASTER_TRANSFER_REASON =
    require("../api/configurationMasters/transferReason_master/model/transferReason_master.model")(
      sequelize,
      Sequelize
    );

  // ======= Master Transfer Type Models ======= //
  db.MASTER_TRANSFER_TYPE =
    require("../api/configurationMasters/transferType_master/model/transferType_master.model")(
      sequelize,
      Sequelize
    );

  // ======= UOM Models ======= //
  db.MASTER_UOM = require("../api/configurationMasters/uom/model/uom.model")(
    sequelize,
    Sequelize
  );

  // ======= HRMS User Family Details Model ======= //
  db.HRMS_USER_FAMILY_DETAIL = require("../api/user/model/familyDetails.model")(
    sequelize,
    Sequelize
  );

  // ======= HRMS User Allowance Details Model ======= //
  db.HRMS_USER_ALLOWANCE_MASTER =
    require("../api/user/model/userAllowance.model")(sequelize, Sequelize);

  // ======= HRMS User Previous Employment Details Model ======= //
  db.HRMS_USER_PREVIOUS_EMPLOYER_DETAIL =
    require("../api/user/model/userPreviousDetail.model")(sequelize, Sequelize);

  // ======= HRMS User Registered Entity Details Model ======= //
  db.HRMS_USER_REGISTERED_ENTITY_MASTER =
    require("../api/user/model/userRegisteredEntities.model")(
      sequelize,
      Sequelize
    );

  // ======= HRMS User Salary Details Model ======= //
  db.HRMS_USER_SALARY_REVISION =
    require("../api/user/model/userSalaryRevision.model")(sequelize, Sequelize);

  // ======= Login Model ======= //
  db.MASTER_LOGIN = require("../api/user/model/login.model")(
    sequelize,
    Sequelize
  );

  return db;
};
