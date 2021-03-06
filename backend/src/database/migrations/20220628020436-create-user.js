'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users',
        {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
     
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt:{
          type: Sequelize.DATE,
        },

        deletedAt:{
          type: Sequelize.DATE,
        }

      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('users');
  }
};
