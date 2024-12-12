import { hello } from '@/utils/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  text: string;
  isBot: boolean;
  code: number;
}

export interface MessagesState {
  isShowTutorial: boolean;
  message: string;
  messages: Message[];
  isBotResponseNeeded: boolean;
}

const initialState: MessagesState = {
  isShowTutorial: true,
  message: '',
  messages: [
    {
      text: hello,
      isBot: true,
      code: 0,
    },
  ],
  isBotResponseNeeded: false,
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
    },
    setIsBotResponseNeeded: (state, action: PayloadAction<boolean>) => {
      state.isBotResponseNeeded = action.payload;
    },
  },
});

export const { setIsShowTutorial, setMessage, setMessages, setIsBotResponseNeeded } =
  messagesSlice.actions;
export default messagesSlice.reducer;
