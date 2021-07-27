/* eslint @typescript-eslint/camelcase: off */
import BaseService from './BaseService'

export default class MentorshipService extends BaseService {
  async fetchMentorshipByApprenticeId(id: number): Promise<Array<any>> {
    const response = await this.client.get(`mentorships/findByApprenticeId/${id}`)
    return response.data
  }

  async fetchMentorshipByMentorId(id: number): Promise<Array<any>> {
    const response = await this.client.get(`mentorships/findByMentorId/${id}`)
    return response.data
  }

  async requestMentorship(mentorId, apprenticeId): Promise<any> {
    try {
      const response = await this.client.post('mentorships', {
        mentor_id: mentorId,
        apprentice_id: apprenticeId,
        days_duration: 14,
      })
      return response.data
    } catch (err) {
      console.error('Error creating mentorship request! ', err)
      throw err
    }
  }

  async acceptMentorship(mentorshipId): Promise<void> {
    try {
      await this.client.put(`mentorships/${mentorshipId}/accept`)
    } catch (err) {
      console.error('Error accepting mentorship request! ', err)
      throw err
    }
  }
}
