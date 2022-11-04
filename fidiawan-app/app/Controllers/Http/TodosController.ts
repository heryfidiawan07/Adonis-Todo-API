import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TodoValidator from 'App/Validators/TodoValidator'
import TodoItem from 'App/Models/TodoItem'

export default class TodosController {
    	public async index ({response}: HttpContextContract) {
		try {
			const data = await TodoItem.query()

			return response.json({status: "Success", message: 'Success', data: data})
		} catch (error) {
			return response.json({status: "Error", message: error.message, data: null})
		}
	}

	public async show ({params, response}: HttpContextContract) {
		try {
			const data = await TodoItem.find(params.id)
			if(!data) {
				throw new Error('Data not found !')
			}

			return response.json({status: "Success", message: 'Success', data: data})
		} catch (error) {
			return response.json({status: "Error", message: error.message, data: null})
		}
	}

	public async store ({request, response}: HttpContextContract) {
		const valid = await request.validate(TodoValidator)
		try {
			const data = await TodoItem.create(valid)

			return response.json({status: 'Success', message: 'Success', data: data})
		} catch (error) {
			return response.json({status: 'Error', message: error.message, data: null})
		}
	}

	public async update ({params, request, response}: HttpContextContract) {
		const valid = await request.validate(TodoValidator)
		try {
			const data = await TodoItem.find(params.id)
			if(!data) {
				throw new Error('Data not found !')
			}
			data.activity_group_id = valid.activity_group_id
			data.title = valid.title
			data.is_active = valid.is_active
			data.priority = valid.priority
			await data.save()

			return response.json({status: 'Success', message: 'Success', data: data})
		} catch (error) {
			return response.json({status: 'Error', message: error.message, data: null})
		}
	}

	public async delete ({params, response}: HttpContextContract) {
		try {
			const data = await TodoItem.find(params.id)
			if(!data) {
				throw new Error('Data not found !')
			}
			await data.delete()

			return response.json({status: 'Success', message: 'Success', data: {}})
		} catch (error) {
			return response.json({status: 'Error', message: error.message, data: null})
		}
	}
}
