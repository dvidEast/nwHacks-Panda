require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twNumber = process.env.TWILIO_NUMBER;
const userNumber = process.env.USER_NUMBER;

const twilio = require('twilio');
const client = twilio(accountSid, authToken);

client.messages.create({
     body: 'get to work.',
     from: twNumber,
     to: userNumber 
   })
  .then(message => console.log(message.sid));