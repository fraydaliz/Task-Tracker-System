
import { pool } from '../db/cn.js'

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

  

 
    const insertSql = `INSERT INTO task_tracker.users (name, email, password) VALUES ($1, $2, $3) RETURNING *`
    const result = await pool.query(insertSql, [name, email, password]) 
    res.status(201).json({ message: 'User registered', user: result.rows[0] })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
