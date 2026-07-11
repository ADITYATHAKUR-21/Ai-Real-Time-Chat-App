import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
import cookieParser from 'cookie-parser';

// import all routes
import userRoutes from './routes/User.route.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTION'],
    allowedHeaders: ['Content-type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;

app.use(cookieParser());

// User rotes

app.use('/api/v1/users', userRoutes);

db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
