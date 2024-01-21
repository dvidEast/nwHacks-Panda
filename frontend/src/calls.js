
async function sendMessageToBackend() {
    console.log("Send Message To Backend");
    try {
      const response = await fetch('http://localhost:43011/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Message sent successfully:', result);
      } else {
        const errorMessage = await response.text();
        console.error('Error sending message:', errorMessage);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  
  async function sendNumberToBackend(num) {
    console.log("Send Message To Backend");
    try {
      const response = await fetch('http://localhost:43011/sendNumber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: num }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('number sent successfully:', result);
      } else {
        const errorMessage = await response.text();
        console.error('Error sending number:', errorMessage);
      }
    } catch (error) {
      console.error('Error sending number:', error);
    }
  }

  export { sendMessageToBackend, sendNumberToBackend };