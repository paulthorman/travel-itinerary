'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pwdhash: DataTypes.STRING
  }, {
    // so updatedAt will be updated_at
    underscored: true,
    // disable the modification of tablenames
    freezeTableName: true,
    // define the table's name
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Trip, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return User;
};