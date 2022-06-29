import { AllowNull, BeforeBulkUpdate, BeforeCreate, BeforeUpdate, Column, HasMany, Model, Table } from 'sequelize-typescript'
import Task from '../tasks/tasks.entity'

@Table({
  tableName: 'users',
  name: {
    plural: 'users',
    singular: 'user',
  },
})
export default class User extends Model {
  @AllowNull(false)

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  email: string

  @AllowNull(false)
  @Column
  password: string

  @Column
  createdAt?: Date

  @Column
  updatedAt?: Date

  @Column
  deletedAt?: Date

  @HasMany(() => Task)
  tasks: Task[]

  

}

