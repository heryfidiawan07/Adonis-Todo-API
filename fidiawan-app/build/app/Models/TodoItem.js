"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const ActivityGroup_1 = __importDefault(require("./ActivityGroup"));
class TodoItem extends Orm_1.BaseModel {
}
TodoItem.table = 'todos';
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], TodoItem.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], TodoItem.prototype, "activity_group_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], TodoItem.prototype, "title", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], TodoItem.prototype, "is_active", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], TodoItem.prototype, "priority", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], TodoItem.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], TodoItem.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], TodoItem.prototype, "deletedAt", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => ActivityGroup_1.default, {
        foreignKey: 'activity_groups_id',
    }),
    __metadata("design:type", Object)
], TodoItem.prototype, "activity_group", void 0);
exports.default = TodoItem;
//# sourceMappingURL=TodoItem.js.map