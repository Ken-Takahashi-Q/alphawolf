import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import messagesReducer from '../reducers/messagesReducer';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: {
//     reducer: rootReducer,
//     messages: messagesReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['messages/setMessages'],
//         ignoredActionPaths: ['payload.code'],
//         ignoredPaths: ['messages.messages.code'],
//       },
//     }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;
