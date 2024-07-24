import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from '../reducers/globalReducer';
import messagesReducer from '../reducers/messagesReducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
  globalState: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;