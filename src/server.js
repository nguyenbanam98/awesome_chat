import express from 'express';
import morgan from 'morgan';
import { connect } from './config/db';
import Contact from './models/contact.model';
const app = express()
const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || localhost;

// Connect to DB
connect();

app.use(morgan('dev'))
app.get('/', async (req, res) => {
  try {
    let item = {
      userId: '5f4safsdafsdaf',
      contactId: 'fadfjhasjkfd',
    };
    const contact = await Contact.create(item);
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})



