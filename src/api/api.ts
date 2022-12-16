import axios from 'axios';
import {TBiddingTimer, TMember} from './api.types';
import {API_URL} from '../shared/consts';

export const getMembers = () => {
  return axios.get<TMember[]>(`${API_URL}/lotus-members`);
};

export const getTimer = () => {
  return axios.get<TBiddingTimer>(`${API_URL}/lotus-timer/1`);
};

export const updateTimer = (params: TBiddingTimer) => {
  return axios.put<TBiddingTimer>(`${API_URL}/lotus-timer/1`, params);
};
