import express from 'express'
export const employee = express.Router()
import { getEmployee, postEmployee, deleteEmployee, putEmployee, getEmployeeId, } from '../controller/employeeController.js' 

employee.get('/employee/' , getEmployee )
employee.get('/employee/:employee_id' , getEmployeeId )
employee.post('/employee/', postEmployee)
employee.delete('/employee/:employee_id', deleteEmployee)
employee.put('/employee/:employee_id', putEmployee)

