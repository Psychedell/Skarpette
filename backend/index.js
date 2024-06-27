const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const skarpetteRouter = require('./routes/skarpette');

dotenv.config();

const app = express();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });

app.use('/', skarpetteRouter);

app.listen(process.env.PORT, () => {
    console.log('Backend is running');
});
