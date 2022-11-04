"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ActivityValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string([
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(100),
            ]),
            email: Validator_1.schema.string([
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(100),
            ])
        });
        this.messages = {
            minLength: '{{ field }} must be at least {{ options.minLength }} characters long',
            maxLength: '{{ field }} must be less then {{ options.maxLength }} characters long',
        };
    }
}
exports.default = ActivityValidator;
//# sourceMappingURL=ActivityValidatior.js.map