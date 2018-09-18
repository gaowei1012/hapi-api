'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => (
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    'goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        parimaryKey: true
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),

  down: queryInterface => queryInterface.dropTable('goods')
};
