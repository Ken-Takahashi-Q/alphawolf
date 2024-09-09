import { combineReducers } from '@reduxjs/toolkit';
import messagesReducer from '../reducers/messagesReducer';
import globalReducer from '../reducers/globalReducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
  globalState: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
