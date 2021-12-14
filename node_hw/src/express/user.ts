import express from 'express'
import { authCheck } from './authCheck'

export const userRouter = express.Router()
userRouter.use(authCheck)
userRouter.get('/', (req, res) => {
  // @ts-ignore
  const data = req.user
  res.json(data)
})

userRouter.get('/orders/:id', (req, res) => {
  res.json({
    orderId: req.params.id,
  })
})

userRouter.get('/search', (req, res) => {
  res.json({ query: req.query })
})
userRouter.delete('/', (req, res) => {
  res.json({ message: 'user deleted' })
})
