import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();



const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTION'],
    allowedHeaders: ['Content-type', "Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT  || 4000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});