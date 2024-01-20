const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


const port = 43011;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})