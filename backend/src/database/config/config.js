const { join } = require('path');

const baseConfig = {
  host: process.env.DB_HOST,
  database: 'myschedule',
  username: 'gabriel',
  password: 123456,
  modelPaths: [join(__dirname, '..', '..', '**', '*.entity.*')],
  define: {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  },
};

module.exports = {
  development: {
    ...baseConfig,
    dialect: 'postgres',
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
      useUTC: true,
    },
  },
};
