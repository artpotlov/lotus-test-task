import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {TMembersState} from './members.types';
import {fetchMembers} from '../../thunks/thunks';

const initialState: TMembersState = {
  isLoading: true,
  members: [],
  errorMessage: null,
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.members = action.payload;
      })
      .addMatcher(isAnyOf(fetchMembers.pending), (state) => {
        state.isLoading = true;
        state.members = [];
        state.errorMessage = null;
      })
      .addMatcher(isAnyOf(fetchMembers.rejected), (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || 'Error';
      });
  },
});

export const membersReducer = membersSlice.reducer;
