import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'activities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 100).notNullable().defaultTo('default-email')
      table.string('title', 100).notNullable().defaultTo('default-title')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
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
