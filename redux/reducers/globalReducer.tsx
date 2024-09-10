import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  // isChatOpen: localStorage.getItem('isChatOpen') === 'true',
  isChatOpen: false,
  isShowDeleteChatConfirm: false,
  botIndex: 0,
  isAddToCart: false,
  cart: 0,
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setIsChatOpen: (state, action) => {
      state.isChatOpen = action.payload;
      // localStorage.setItem('isChatOpen', action.payload);
    },
    setIsShowDeleteChatConfirm: (state, action) => {
      state.isShowDeleteChatConfirm = action.payload;
    },
    setBotIndex: (state, action) => {
      state.botIndex = action.payload;
    },
    setIsAddToCart: (state, action) => {
      state.isAddToCart = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setIsChatOpen, setIsShowDeleteChatConfirm, setBotIndex, setIsAddToCart, setCart } =
  globalSlice.actions;
export default globalSlice.reducer;
