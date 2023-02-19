const WebSocket = require('ws');
const dotenv = require('dotenv');

dotenv.config();

const whisper = new WebSocket('wss://api.openai.com/v1/whisper/stream', {
  headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` }
});

whisper.on('open', () => {
  console.log('WebSocket connected to OpenAI Whisper');
});

whisper.on('message', (data) => {
  const response = JSON.parse(data);
  console.log('Received message from OpenAI Whisper:', response);
});

whisper.on('close', () => {
  console.log('WebSocket disconnected from OpenAI Whisper');
});

const send = (message) => {
  whisper.send(JSON.stringify({ type: 'message', data: message }));
};

module.exports = { send };
