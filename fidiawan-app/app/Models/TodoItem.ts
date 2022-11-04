import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ActivityGroup from './ActivityGroup'

export default class TodoItem extends BaseModel {
  public static table = 'todos'
  @column({ isPrimary: true })
  public id: number

  @column()
  public activity_group_id: number

  @column()
  public title: string

  @column()
  public is_active: string

  @column()
  public priority: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @belongsTo(() => ActivityGroup, {
    foreignKey: 'activity_groups_id',
  })
  public activity_group: BelongsTo<typeof ActivityGroup>
}
