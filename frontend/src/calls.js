async function sendMessageToBackend() {
    try {
      const response = await fetch('http://localhost:43011/api/sendMessage', {
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
  
  // You can call this function based on a user action, for example:
  // When a button is clicked
  document.getElementById('sendMessageButton').addEventListener('click', sendMessageToBackend);
  module.exports = {
    sendMessageToBackend,
  };