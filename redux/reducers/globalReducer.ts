import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // isChatOpen: localStorage.getItem('isChatOpen') === 'true',
  isChatOpen: false,
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setIsChatOpen: (state, action) => {
      state.isChatOpen = action.payload;
      // localStorage.setItem('isChatOpen', action.payload);
    },
  }
});

export const { setIsChatOpen } = globalSlice.actions;
export default globalSlice.reducer;
