const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

app.use('/', (req, res) => {
    res.json({
        message: 'API is running'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better catch it on PORT ${process.env.PORT}`,
    `http://localhost:${process.env.PORT}`)
})