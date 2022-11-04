"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class TodoValidatior {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            activity_group_id: Validator_1.schema.number(),
            title: Validator_1.schema.string([
                Validator_1.rules.maxLength(100),
            ]),
            is_active: Validator_1.schema.string([
                Validator_1.rules.maxLength(50),
            ]),
            priority: Validator_1.schema.string([
                Validator_1.rules.maxLength(50),
            ])
        });
        this.messages = {
            minLength: '{{ field }} must be at least {{ options.minLength }} characters long',
            maxLength: '{{ field }} must be less then {{ options.maxLength }} characters long',
        };
    }
}
exports.default = TodoValidatior;
//# sourceMappingURL=TodoValidator.js.map