import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodoValidatior {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    activity_group_id: schema.number(),
    title: schema.string([
      rules.maxLength(100),
    ]),
    is_active: schema.string([
      rules.maxLength(50),
    ]),
    priority: schema.string([
      rules.maxLength(50),
    ])
  })
  public messages: CustomMessages = {
    minLength: '{{ field }} must be at least {{ options.minLength }} characters long',
    maxLength: '{{ field }} must be less then {{ options.maxLength }} characters long',
    // required: '{{ field }} is required',
    // unique: '{{ field }} must be unique, and this value is already taken',
  }
}
