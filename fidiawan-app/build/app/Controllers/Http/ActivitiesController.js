"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActivityValidatior_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/ActivityValidatior"));
const ActivityGroup_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ActivityGroup"));
class ActivitiesController {
    async index({ response }) {
        try {
            const data = await ActivityGroup_1.default.all();
            return response.json({ status: "Success", message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: "Error", message: error.message, data: null });
        }
    }
    async show({ params, response }) {
        try {
            const data = await ActivityGroup_1.default.find(params.id);
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
        const valid = await request.validate(ActivityValidatior_1.default);
        try {
            const data = await ActivityGroup_1.default.create(valid);
            return response.json({ status: 'Success', message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: 'Error', message: error.message, data: null });
        }
    }
    async update({ params, request, response }) {
        const valid = await request.validate(ActivityValidatior_1.default);
        try {
            const data = await ActivityGroup_1.default.find(params.id);
            if (!data) {
                throw new Error('Data not found !');
            }
            data.email = valid.email;
            data.title = valid.title;
            await data.save();
            return response.json({ status: 'Success', message: 'Success', data: data });
        }
        catch (error) {
            return response.json({ status: 'Error', message: error.message, data: null });
        }
    }
    async delete({ params, response }) {
        try {
            const data = await ActivityGroup_1.default.find(params.id);
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
exports.default = ActivitiesController;
//# sourceMappingURL=ActivitiesController.js.map