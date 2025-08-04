import express from 'express'
export const task = express.Router()
import { validateToken } from '../middleware/authValidation.js'

import { getTasks, deleteTasks, postTasks, putTasks, getTasksPerEmployee } from '../controller/tasksController.js'

task.get('/tasks/' , validateToken, getTasks )
task.get('/tasks/:employee_id' ,validateToken, getTasksPerEmployee )
task.post('/tasks/',validateToken, postTasks)
task.delete('/tasks/:task_id',validateToken, deleteTasks)
task.put('/tasks/:task_id',validateToken, putTasks)