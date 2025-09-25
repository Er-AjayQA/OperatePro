// ********************** DB Configuration ********************** //

// ======= For Office Environment ======= //
module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "ajay@2681993#",
  DB: "operatepro",
  dialect: "mysql",
  logging: "false",
  camelCase: true,
  additional: { timestamps: false },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// ======= For Home Environment ======= //
// module.exports = {
//   HOST: "127.0.0.1",
//   USER: "root",
//   PASSWORD: "nayra2024",
//   DB: "operatepro",
//   dialect: "mysql",
//   logging: "false",
//   camelCase: true,
//   additional: { timestamps: false },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
