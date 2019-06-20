import express from 'express'
import mongoose from 'mongoose'
import { DB_URL, DB_USER, DB_USER_PASSWORD } from './dbcredentials'
import { router as todos } from './routes/todos'
import { router as users } from './routes/users'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${DB_URL}`, { useNewUrlParser: true,  useCreateIndex: true, })
    .then(() => console.log('Connection to MongoDB established'))
    .catch(err => console.log('Error connecting to MongoDB', err))

const app = express()

app.use(express.json())
app.use('/api/todos', todos)
app.use('/api/users', users)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started at http://localhost:${port}`))
