import {configureStore} from '@reduxjs/toolkit';
import {membersReducer} from './slices/members/members.slice';
import {biddingTimerReducer} from './slices/biddingTimer/biddingTimer.slice';

export const store = configureStore({
  reducer: {
    members: membersReducer,
    biddingTimer: biddingTimerReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
