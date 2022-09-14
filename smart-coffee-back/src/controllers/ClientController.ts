import { Request, Response } from 'express'
import { dbConnection } from '../mysql'

export function registerNewClient(req: Request, res: Response) {
  const { name, email } = req.body

  if(!name || !email) {
    return res.status(400).send({ message: 'Name and/or email is missing' })
  }

  const couponCode = Math.random().toString(36).slice(2,10).toUpperCase()

  dbConnection.query(
    'INSERT INTO clients (name, email, coupon_code) VALUES (?,?,?)',
    [name, email, couponCode],
    (error, results) => {
      if (error) {
        return res.status(403).send({ error: 'User already registered' })
      }
      const userId = results.insertId
      return res.status(201).send({
        message: 'User registered', 
        user: { id: userId, name, email, couponCode } 
      })
    }
  )
}