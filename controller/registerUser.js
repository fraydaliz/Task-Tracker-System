
import { pool } from '../db/cn.js'

export const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, birth_date, email, password,  } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

  

 
    const Sql = `INSERT INTO task_tracker.users (first_name, email, birth_date password) VALUES ($1, $2, $3) RETURNING *`
    const result = await pool.query(Sql, [first_name, last_name, birth_date, email, password]) 
    res.status(201).json({ message: 'User registered', user: result.rows[0] })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
