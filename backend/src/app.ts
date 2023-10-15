import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import reviewController from './controllers/reviewController';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/review", reviewController)

app.listen(3001, () => {
  console.log(' review app listening on port 3001!');
})