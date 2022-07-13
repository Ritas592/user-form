import { UsersData, UsersSearch } from '../types';
import apiClient from './axios/client';

export const fetchUsers = async (): Promise<UsersSearch[]> => {
  const { data: response } = await apiClient.get('/users');
  return response as UsersSearch[];
};

export const createUsers = async (user: UsersData): Promise<{}> => {
  const { data: response } = await apiClient.post('/users', user);
  return response as {};
};

export const searchUserById = async (id: string): Promise<UsersSearch> => {
  const { data: response } = await apiClient.get(`/users/${id}`);
  return response as UsersSearch;
};
