import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './ChannelsSlice.js';
import messagesReducer from './messageSlice.js';
import modalReducer from './modalSlice.js';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
    modal: modalReducer,
  },
});
