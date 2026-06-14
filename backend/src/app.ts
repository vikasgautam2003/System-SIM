const express = require('express');
import healthRouter from './routes/healthRouter'
const cors=require('cors');

const app =express();

app.use(cors());


app.use("/health",healthRouter)


export default app;