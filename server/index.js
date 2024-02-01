import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
      app.use(express.json({ limit: '30mb', extended: 'true' }));
      app.use(express.urlencoded({ limit: '30mb', extended: 'true' }));
      app.use(cors());

      app.get('/', (req, res) => {
          res.send('This is a stack overflow clone API');
});

      app.use('/user', userRoutes);
      app.use('/questions', questionRoutes);
      app.use('/answer',answerRoutes);

const PORT = process.env.PORT || 4003;

const DATABASE_CONN = 'mongodb+srv://admin:<password>@stackoverflow.ah6cx4y.mongodb.net/stackoverflowdb' ;
{console.log(process.env.CONNECTION_URL)}
mongoose.connect(DATABASE_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    return app.listen(PORT);
  })
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });