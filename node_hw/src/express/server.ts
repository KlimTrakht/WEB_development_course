import express from 'express'
import jwt from 'jsonwebtoken'

const key = 'UTYUIJNKI'
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.write('Hello')
  res.end()
})
app.post('/login', (req, res) => {
  const data = req.body
  if (data.username == 'test' && data.password == 'test') {
    const token = jwt.sign(data, key)
    res.json({ token, username: req.body.username })
  } else {
    res.status(401)
    res.json('wrong user name or password')
  }
})
app.get('/user', (req, res) => {
  const token = req.header('Authorization') || ''
  const data = jwt.verify(token, key)
  res.json(data)
})
app.listen(3000, () => {
  console.log('Server started')
})
