import express from 'express';
import morgan from 'morgan';
import { connect } from './config/db';
const app = express()
const port = 3000

// Connect to DB
connect();

app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



