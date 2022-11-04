"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/TodoValidator"));
const TodoItem_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/TodoItem"));
class TodosController {
    async index({ response }) {
        try {
            const data = await TodoItem_1.default.query();
            return response.json({ status: "Success", message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: "Error", message: error.message, data: null });
        }
    }
    async show({ params, response }) {
        try {
            const data = await TodoItem_1.default.find(params.id);
            if (!data) {
                throw new Error('Data not found !');
            }
            return response.json({ status: "Success", message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: "Error", message: error.message, data: null });
        }
    }
    async store({ request, response }) {
        const valid = await request.validate(TodoValidator_1.default);
        try {
            const data = await TodoItem_1.default.create(valid);
            return response.json({ status: 'Success', message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: 'Error', message: error.message, data: null });
        }
    }
    async update({ params, request, response }) {
        const valid = await request.validate(TodoValidator_1.default);
        try {
            const data = await TodoItem_1.default.find(params.id);
            if (!data) {
                throw new Error('Data not found !');
            }
            data.activity_group_id = valid.activity_group_id;
            data.title = valid.title;
            data.is_active = valid.is_active;
            data.priority = valid.priority;
            await data.save();
            return response.json({ status: 'Success', message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: 'Error', message: error.message, data: null });
        }
    }
    async delete({ params, response }) {
        try {
            const data = await TodoItem_1.default.find(params.id);
            if (!data) {
                throw new Error('Data not found !');
            }
            await data.delete();
            return response.json({ status: 'Success', message: 'Success', data: {} });
        }
        catch (error) {
            return response.json({ status: 'Error', message: error.message, data: null });
        }
    }
}
exports.default = TodosController;
//# sourceMappingURL=TodosController.js.map