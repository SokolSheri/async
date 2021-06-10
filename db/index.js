const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432:poll", {
  logging: false,
});

db.define("results", {
  result: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

db.sync().then(function () {
  app.listen(3000);
});

module.exports = db;
