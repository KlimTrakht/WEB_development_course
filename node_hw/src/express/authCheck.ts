import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Config } from './config'

export function authCheck(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')
  try {
    if (token) {
      const data = jwt.verify(token, Config.secretKey)
      // @ts-ignore
      req.user = data
      next()
    } else {
      res.status(401)
      res.json({ error: 'Auth failed, token not set' })
    }
  } catch (e: any) {
    res.status(401)
    res.json({ error: 'Auth failed ' + e.message })
  }
}
