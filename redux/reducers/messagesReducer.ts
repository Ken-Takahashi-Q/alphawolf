import { hello } from '@/utils/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  text: string;
  isBot: boolean;
}

interface MessagesState {
  message: string;
  messages: Message[];
}

const initialState: MessagesState = {
  message: "",
  messages: [
    {
      text: hello,
      isBot: true,
    }
  ]
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    }
  }
});

export const { setMessage, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
