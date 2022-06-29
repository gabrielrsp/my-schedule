import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { development } from './config/config.js'

export const databaseProvider = {
  provide: 'SequelizeToken',
  useFactory: async () => {
    const nodeEnv = process.env.NODE_ENV as any
    const sequelizeOptions: SequelizeOptions = { development }[nodeEnv] as any
    const sequelize = new Sequelize(sequelizeOptions)

    return sequelize
  },
}
