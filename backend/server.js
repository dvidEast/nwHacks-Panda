const express = require('express');
const app = express();
const port = 43011;

const cors = require('cors');
const twilio = require('./api/twilio')
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.post('/sendMessage', async (req, res) => {
    try {
        await twilio.sendMessage();
        res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/sendNumber', async (req, res) => {
  try {
    twilio.setNumber('+1' + req.body.text); 
    res.status(200).json({ success: true });
} catch (error) {
  console.error('Error sending messages:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})