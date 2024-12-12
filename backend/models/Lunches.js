const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Lunches', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Lunches',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Lunches_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
