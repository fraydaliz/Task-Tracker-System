import express from 'express'
export const task = express.Router()

import { getTasks, deleteTasks, postTasks, putTasks, getTasksPerEmployee } from '../controller/tasksController.js'

task.get('/tasks/' , getTasks )
task.get('/tasks/:employee_id' , getTasksPerEmployee )
task.post('/tasks/', postTasks)
task.delete('/tasks/:task_id', deleteTasks)
task.put('/tasks/:task_id', putTasks)