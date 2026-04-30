import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import url_router from './router/urlRouter.js';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const mongo_url = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(mongo_url).then(() =>{
    console.log("Mongo DB Connected");
}).catch((err) =>{
    console.log(err);
});


app.use('/', url_router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})



