import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ActivityValidator from 'App/Validators/ActivityValidatior'
import ActivityGroup from 'App/Models/ActivityGroup'

export default class ActivitiesController {
    public async index ({response}: HttpContextContract) {
		try {
			const data = await ActivityGroup.all()

			return response.json({status: "Success", message: 'Success', data: data})
		} catch (error) {
			return response.json({status: "Error", message: error.message, data: null})
		}
    }

	public async show ({params, response}: HttpContextContract) {
		try {
			const data = await ActivityGroup.find(params.id)
			if(!data) {
				throw new Error('Data not found !')
			}

			return response.json({status: "Success", message: 'Success', data: data})
		} catch (error) {
			return response.json({status: "Error", message: error.message, data: null})
		}
    }

    public async store ({request, response}: HttpContextContract) {
		const valid = await request.validate(ActivityValidator)
		try {
			const data = await ActivityGroup.create(valid)

			return response.json({status: 'Success', message: 'Success', data: data})
		} catch (error) {
			return response.json({status: 'Error', message: error.message, data: null})
		}
    }

    public async update ({params, request, response}: HttpContextContract) {
		const valid = await request.validate(ActivityValidator)
		try {
			const data = await ActivityGroup.find(params.id)
			if(!data) {
				throw new Error('Data not found !')
			}
			data.email = valid.email
			data.title = valid.title
			await data.save()

			return response.json({status: 'Success', message: 'Success', data: data})
		} catch (error) {
			return response.json({status: 'Error', message: error.message, data: null})
		}
    }

	public async delete ({params, response}: HttpContextContract) {
		try {
			const data = await ActivityGroup.find(params.id)
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
