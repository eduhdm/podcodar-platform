import BaseService from './BaseService'

class UsersService extends BaseService {
  async fetchUsers(): Promise<Array<any>> {
    const response = await this.client.get('users?includeSkills=true')
    return response.data
  }
}

export default UsersService
