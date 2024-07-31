import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  // isChatOpen: localStorage.getItem('isChatOpen') === 'true',
  isChatOpen: false,
  isShowDeleteChatConfirm: false,
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setIsChatOpen: (state, action) => {
      state.isChatOpen = action.payload;
      // localStorage.setItem('isChatOpen', action.payload);
    },
    setIsShowDeleteChatConfirm: (state, action: PayloadAction<boolean>) => {
      state.isShowDeleteChatConfirm = action.payload;
    }
  }
});

export const { setIsChatOpen, setIsShowDeleteChatConfirm } = globalSlice.actions;
export default globalSlice.reducer;
