require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twNumber = process.env.TWILIO_NUMBER;
const userNumber = process.env.USER_NUMBER;

const twilio = require('twilio');
const client = twilio(accountSid, authToken);

async function sendMessage() {
  try {
    const message = await client.messages.create({
      body: 'get off your phone or else...',
      from: twNumber,
      to: userNumber,
    });

    console.log(`Message sent.`);
    return message;
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw error;
  }
}

// async function sendMessages() {
//   // Use a for loop to call the sendMessage function 10 times
//   for (let i = 0; i < 10; i++) {
//     try {
//       await sendMessage();
//     } catch (error) {
//       // Handle errors
//       console.error('Error sending message:', error);
//     }
//   }
// }

module.exports = {
  sendMessage,
};
