import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import { connectDB } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.text({ type: 'text/xml' }));
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
