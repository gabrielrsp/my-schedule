import { AllowNull, DataType, BelongsTo, Column, Model, Table, ForeignKey } from 'sequelize-typescript'
import User from '../users/users.entity'

@Table({
  tableName: 'tasks',
  name: {
    plural: 'tasks',
    singular: 'task',
  },
})
export default class Task extends Model {
  @AllowNull(false)
  @Column
  title: string

  @Column(DataType.STRING(400))
  description: string

  @AllowNull(false)
  @Column
  dateLimit: Date

  @Column
  createdAt?: Date

  @Column
  updatedAt?: Date

  @Column
  deletedAt?: Date

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User

}

