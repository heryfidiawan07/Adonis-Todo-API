"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'todos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('activity_group_id').unsigned().references('id').inTable('activity_groups').onDelete('CASCADE');
            table.string('title', 100).notNullable().defaultTo('default-title');
            table.string('is_active', 50).notNullable().defaultTo('1');
            table.string('priority', 50).notNullable().defaultTo('very-high');
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').notNullable();
            table.timestamp('deleted_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1667501344124_todo_items.js.map