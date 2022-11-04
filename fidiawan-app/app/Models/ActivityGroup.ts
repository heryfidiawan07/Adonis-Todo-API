import { DateTime } from 'luxon'
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import TodoItem from './TodoItem'

export default class ActivityGroup extends BaseModel {
  public static table = 'activities'
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @hasMany(() => TodoItem, {
    foreignKey: 'activity_groups_id',
  })
  public todo_items: HasMany<typeof TodoItem>
}
