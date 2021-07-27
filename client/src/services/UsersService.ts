import { AxiosResponse } from 'axios';
import BaseService from './BaseService';

class UsersService extends BaseService {
  constructor() {
    super();
  }

  async fetchUsers(): Promise<AxiosResponse> {
    const response = await this.client.get('users')
    return response.data;
  }
}

export default UsersService;
