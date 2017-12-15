'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
          type: Sequelize.INTEGER
        },
      voljob: {
        type: Sequelize.STRING
      },
      depcity: {
        type: Sequelize.STRING
      },
      destcity: {
        type: Sequelize.STRING
      },
      depfly: {
        type: Sequelize.STRING
      },
      retfly: {
        type: Sequelize.STRING
      },
      depart: {
        type: Sequelize.DATE
      },
      return: {
        type: Sequelize.DATE
      },
      hotelurl: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('trips');
  }
};
