var DataTypes = require("sequelize").DataTypes;
var _Lunches = require("./Lunches");
var _SequelizeMeta = require("./SequelizeMeta");
var _user = require("./user");

function initModels(sequelize) {
  var Lunches = _Lunches(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    Lunches,
    SequelizeMeta,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
