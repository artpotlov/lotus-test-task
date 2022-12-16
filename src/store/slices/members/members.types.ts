import {TMember} from '../../../api/api.types';

export type TMembersState = {
  isLoading: boolean;
  members: TMember[];
  errorMessage: string | null;
}
