/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import TodosController from 'App/Controllers/Http/TodosController'
import ActivitiesController from 'App/Controllers/Http/ActivitiesController'

Route.get('/', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('activity-groups', async (ctx) => {
  return new ActivitiesController().index(ctx)
})
Route.get('activity-groups/:id', async (ctx) => {
  return new ActivitiesController().show(ctx)
})
Route.post('activity-groups', async (ctx) => {
  return new ActivitiesController().store(ctx)
})
Route.patch('activity-groups/:id', async (ctx) => {
  return new ActivitiesController().update(ctx)
})
Route.delete('activity-groups/:id', async (ctx) => {
  return new ActivitiesController().delete(ctx)
})


Route.get('todo-items', async (ctx) => {
  return new TodosController().index(ctx)
})
Route.get('todo-items/:id', async (ctx) => {
  return new TodosController().show(ctx)
})
Route.post('todo-items', async (ctx) => {
  return new TodosController().store(ctx)
})
Route.patch('todo-items/:id', async (ctx) => {
  return new TodosController().update(ctx)
})
Route.delete('todo-items/:id', async (ctx) => {
  return new TodosController().delete(ctx)
})