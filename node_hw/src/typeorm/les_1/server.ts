import { authRouter } from './auth'
import express, { Request, Response, NextFunction } from 'express'
// import jwt from 'jsonwebtoken'
import { createConnection } from 'typeorm'

async function startServer() {
  const app = express()
  app.use(express.json())
  app.use(authRouter)
  await createConnection()
  console.log('db conected')
  app.listen(3000, () => {
    console.log('Server started')
  })
}

function logErrors(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  next(err)
}

startServer().catch((e) => {
  console.log(e)
})
