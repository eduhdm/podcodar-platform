import { signUpFirebase } from 'utils/auth'

import BaseService from './BaseService'

class UsersService extends BaseService {
  private static instance = new UsersService()

  async fetchUsers(): Promise<any> {
    const response = await this.client.get('users?includeSkills=true')
    return response.data
  }

  async createUser({ email, password }): Promise<any> {
    try {
      const userCredential = await signUpFirebase(email, password)
      const { uid } = userCredential.user
      const response = await this.client.post('users', { accountData: { token: uid, email } })

      return response.data.userId
    } catch (err) {
      console.error('Error creating user!', err)
    }

    return false
  }

  async updateUserInfo(userInfo): Promise<void> {
    const { id } = userInfo
    await this.client.put(`users/${id}`, { userInfo })
  }

  async getUserByToken(token, options): Promise<any> {
    try {
      const response = await this.client.get(`users/${token}`, { params: options })
      return response.data
    } catch (err) {
      console.error('Error getting user by token!', err)
    }

    return false
  }

  static getInstance() {
    return this.instance
  }
}

export default UsersService
