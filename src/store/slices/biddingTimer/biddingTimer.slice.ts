import {TBiddingTimerState} from './biddingTimer.types';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {fetchBiddingTimer} from '../../thunks/thunks';

const initialState: TBiddingTimerState = {
  currentMemberID: '',
  updatedLotTime: 0,
  isLoading: true,
  errorMessage: null,
};

const biddingTimerSlice = createSlice({
  name: 'biddingTimer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBiddingTimer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentMemberID = action.payload.currentMemberID;
        state.updatedLotTime = action.payload.updatedLotTime;
      })
      .addMatcher(isAnyOf(fetchBiddingTimer.pending), (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addMatcher(isAnyOf(fetchBiddingTimer.rejected), (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || 'Error';
      });
  },
});

export const biddingTimerReducer = biddingTimerSlice.reducer;
