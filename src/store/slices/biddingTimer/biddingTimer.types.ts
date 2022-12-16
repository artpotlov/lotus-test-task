import {TBiddingTimer} from '../../../api/api.types';

export type TBiddingTimerState = {
  isLoading: boolean;
  errorMessage: string | null;
} & TBiddingTimer;
