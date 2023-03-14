import app from './index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import home from './routes/home.js'

dotenv.config()

const port = process.env.PORT;
const database = process.env.MDB_URI

app.use('/', home)

mongoose.set('strictQuery', true)

mongoose.connect(`${database}`).then(()=>{
  app.listen(port,()=> console.log(`App listens at port:${port}`))
})