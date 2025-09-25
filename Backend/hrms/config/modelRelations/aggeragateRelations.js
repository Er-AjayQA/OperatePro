// ********************** Exporting & Importing All Relations ********************** //
module.exports = (db) => {
  require("./userRelations")(db);
  require("./departmentRelations")(db);
};
