import {createSelector} from '@reduxjs/toolkit';
import {TRootState} from '../store';

const selectCurrentMemberID = (state: TRootState) => state.biddingTimer.currentMemberID;
const selectUpdatedLotTime = (state: TRootState) => state.biddingTimer.updatedLotTime;
export const selectBiddingTimer = createSelector(
  [selectCurrentMemberID, selectUpdatedLotTime],
  (selectCurrentMemberID, selectUpdatedLotTime) => {
    return {
      currentMemberID: selectCurrentMemberID,
      updatedLotTime: selectUpdatedLotTime,
    };
  },
);
