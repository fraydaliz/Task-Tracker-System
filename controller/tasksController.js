import { pool } from "../db/cn.js";

export const getTasks = async (req, res) => {
  const sql = `select * from task_tracker.tasks`;
  const result = await pool.query(sql);

  return res.json(result.rows);
};

export const postTasks = async (req, res) => {
  const sql = `insert into task_tracker.tasks ( description, status, employee_id) values ($1, $2, $3)`;
  const body = req.body;
  const parameter = [body.description, body.status, body.employee_id];
  const result = await pool.query(sql, parameter);
  return res.json({ massage: "object created" });
};

export const deleteTasks = async (req, res) => {
  const sql = `delete from task_tracker.tasks where task_id= $1`;
  const task_id = req.params.task_id;

  const parameter = [task_id];
  const result = await pool.query(sql, parameter);
  return res.json({ massage: "object deleted" });
};


export const putTasks = async (req, res) => {
  const sql = `update task_tracker.tasks
  set description= $1,
  status = $2,
  employee_id= $3
  where task_id= $4`;

  const body = req.body;
  const task_id = req.params.task_id;

  const parameter = [body.description, body.status, body.employee_id, task_id];
  const result = await pool.query(sql, parameter);
  return res.json({ massage: "object updated" });
};
