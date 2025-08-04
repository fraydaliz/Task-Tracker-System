import express from 'express'
export const employee = express.Router()
import { validateToken } from '../middleware/authValidation.js'
import { getEmployee, postEmployee, deleteEmployee, putEmployee, getEmployeeId, } from '../controller/employeeController.js' 

employee.get('/employee/', validateToken  , getEmployee )
employee.get('/employee/:employee_id',validateToken , getEmployeeId )
employee.post('/employee/',validateToken, postEmployee)
employee.delete('/employee/:employee_id',validateToken, deleteEmployee)
employee.put('/employee/:employee_id',validateToken, putEmployee)

