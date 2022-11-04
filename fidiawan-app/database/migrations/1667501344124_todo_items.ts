import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'todos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('activity_group_id').unsigned().references('id').inTable('activity_groups').onDelete('CASCADE')
      table.string('title', 100).notNullable().defaultTo('default-title')
      table.string('is_active', 50).notNullable().defaultTo('1')
      table.string('priority', 50).notNullable().defaultTo('very-high')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
