'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable (
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    'shops',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncremnt: true,
        primaryKey: true
      },
      neme: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.StRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    },
  
  ),
  down: queryInterface => queryInterface.dropTable('shops')
};
