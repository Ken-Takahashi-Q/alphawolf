import axios from 'axios';

const DIFY_API_BASE_URL = 'https://udify.app/api';

const difyApi = axios.create({
  baseURL: DIFY_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.DIFY_API_KEY}`,
  },
});

export const sendMessageToDify = async (message, sessionId) => {
  try {
    const response = await difyApi.post('/chat-messages', {
      message,
      sessionId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
