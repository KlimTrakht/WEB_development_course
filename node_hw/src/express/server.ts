import express, { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Config } from './config'
import { userRouter } from './user'

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.write('hello')
  res.end()
})
app.post('/login', (req, res) => {
  const data = req.body
  if (data.username == 'test' && data.password == 'test') {
    const token = jwt.sign(data, Config.secretKey, { expiresIn: '30 days' })
    res.json({ token, username: req.body.username })
  } else {
    res.status(401)
    res.json({ error: 'wrong user name or password' })
  }
})
app.use('/user', userRouter)
app.get(/^\/mail.*/, (req, res) => {
  throw new Error('TEST')
  res.json({ msg: 1 })
})
app.use(logErrors)
app.listen(3000, () => {
  console.log('Server started')
})
function logErrors(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  next(err)
}
