import {createAsyncThunk} from '@reduxjs/toolkit';
import {TBiddingTimer, TMember} from '../../api/api.types';
import {getMembers, getTimer} from '../../api/api';
import axios from 'axios';

export const fetchMembers = createAsyncThunk<TMember[], void, { rejectValue: string }>(
  'fetchMembers',
  async (_, thunkAPI) => {
    try {
      const response = await getMembers();
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Bad request');
    }
  });

export const fetchBiddingTimer = createAsyncThunk<TBiddingTimer, void, { rejectValue: string }>(
  'updateBiddingTimer',
  async (_, thunkAPI) => {
    try {
      const response = await getTimer();
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.message);
      }

      return thunkAPI.rejectWithValue('Bad request');
    }
  });
