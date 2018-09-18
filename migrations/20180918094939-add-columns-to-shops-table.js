'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all(
    queryInterface.addColum('shops', 'addres', 
    { type: Sequelize.STRING})
  ),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColum('shops', 'addres')
  ])
};
