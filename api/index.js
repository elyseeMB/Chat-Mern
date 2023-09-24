import express from "express";
import dotven from 'dotenv';
import cors from "cors";
import authRoutes from './routes/Auth.js';


const app = express();
dotven.config();

app.use(cors({
    origin:process.env.PORT_CLIENT,
    credentials:true
}));
app.use(express.json());

/* ROUTES */
app.use(authRoutes);

const PORT = process.env.PORT_SERVER;
app.listen(PORT);

