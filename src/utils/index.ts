import { fetchUsers } from '../api';
import { UsersSearch } from '../types';

export const populateList = (
  isLoading: boolean,
  setIsLoading: (isLoading: boolean)=>void,
  setUsers: (setUsers: UsersSearch[])=> void,
) : void => {
  if (!isLoading) return;
  fetchUsers().then((response: UsersSearch[]) => {
    setUsers(response);
  })
    .catch((error: any) => {
      console.error(error);
    }).finally(() => {
      setIsLoading(false);
    });
};

export default populateList;
