
async function sendMessageToBackend(num) {
    console.log("Send Message To Backend", num, "type of", typeof num);
    try {
      const response = await fetch('http://localhost:43011/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: num }), // Convert the object to a JSON string
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
  
  export { sendMessageToBackend, };