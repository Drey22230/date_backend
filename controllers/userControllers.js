import { pool } from '../db/db.js';

export const createMessage = async (req, res) => {
  try {
    const { letter, author, date } = req.body;

    const result = await pool.query(
      'INSERT INTO message(letter,author,date) VALUES ($1,$2,$3) RETURNING *',
      [letter, author, date]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM message');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};
