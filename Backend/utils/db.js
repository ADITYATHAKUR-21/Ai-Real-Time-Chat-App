import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const db = () => {
    mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("db is connected");
        
    })
    .catch((error) => {
        console.log(error, 'db connecting error');
        
    })
};

export default db;





