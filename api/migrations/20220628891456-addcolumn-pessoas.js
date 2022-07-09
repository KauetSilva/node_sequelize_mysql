'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pessoas', 'deletAt', {
        allowNull: true,
        type: Sequelize.DATE
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pessoas', 'deletedAt');
  }
};
