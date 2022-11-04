"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const HealthCheck_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HealthCheck"));
const TodosController_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/TodosController"));
const ActivitiesController_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Controllers/Http/ActivitiesController"));
Route_1.default.get('/', async ({ response }) => {
    const report = await HealthCheck_1.default.getReport();
    return report.healthy ? response.ok(report) : response.badRequest(report);
});
Route_1.default.get('activity-groups', async (ctx) => {
    return new ActivitiesController_1.default().index(ctx);
});
Route_1.default.get('activity-groups/:id', async (ctx) => {
    return new ActivitiesController_1.default().show(ctx);
});
Route_1.default.post('activity-groups', async (ctx) => {
    return new ActivitiesController_1.default().store(ctx);
});
Route_1.default.patch('activity-groups/:id', async (ctx) => {
    return new ActivitiesController_1.default().update(ctx);
});
Route_1.default.delete('activity-groups/:id', async (ctx) => {
    return new ActivitiesController_1.default().delete(ctx);
});
Route_1.default.get('todo-items', async (ctx) => {
    return new TodosController_1.default().index(ctx);
});
Route_1.default.get('todo-items/:id', async (ctx) => {
    return new TodosController_1.default().show(ctx);
});
Route_1.default.post('todo-items', async (ctx) => {
    return new TodosController_1.default().store(ctx);
});
Route_1.default.patch('todo-items/:id', async (ctx) => {
    return new TodosController_1.default().update(ctx);
});
Route_1.default.delete('todo-items/:id', async (ctx) => {
    return new TodosController_1.default().delete(ctx);
});
//# sourceMappingURL=routes.js.map