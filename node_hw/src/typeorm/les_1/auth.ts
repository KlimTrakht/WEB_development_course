import express from 'express'
import { User } from '../models/User'
import bcrypt from 'bcrypt'

export const authRouter = express.Router()
authRouter.post('/register', async (req, res) => {
  try {
    const data = req.body
    let user = await User.findOne({ where: { userName: data.userName } })
    if (user) {
      const error = new Error(
        `User with given name(${data.userName}) already exists`
      ) as any
      error.code = 422
      throw error
    }
    user = new User()
    user.userName = data.userName
    user.password = bcrypt.hashSync(data.password, 10)
    await user.save()
    res.json(user)
  } catch (e: any) {
    res.status(e.code || 500)
    res.json({ error: e.message })
  }
})
