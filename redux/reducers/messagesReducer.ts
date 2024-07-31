import { hello } from '@/utils/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  text: string;
  isBot: boolean;
}

interface MessagesState {
  isShowTutorial: boolean;
  message: string;
  messages: Message[];
}

const initialState: MessagesState = {
  isShowTutorial: true,
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
    setIsShowTutorial: (state, action: PayloadAction<boolean>) => {
      state.isShowTutorial = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    }
  }
});

export const { setIsShowTutorial, setMessage, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
