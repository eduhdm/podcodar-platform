import BaseService from './BaseService'

export default class SprintsService extends BaseService {
  async fetchSprintById(id: number): Promise<Array<any>> {
    const response = await this.client.get(`sprints/${id}`)
    return response.data
  }

  async fetchSprintByMentorId(mentorId: number): Promise<Array<any>> {
    const response = await this.client.get(`sprints/findByMentorId/${mentorId}`)
    return response.data
  }

  async fetchSprintByApprenticeId(apprenticeId: number): Promise<Array<any>> {
    const response = await this.client.get(`sprints/findByApprenticeId/${apprenticeId}`)
    return response.data
  }

  async createSprint(name, mentorshipId, description): Promise<any> {
    try {
      const response = await this.client.post('sprints', {
        name,
        mentorship_id: mentorshipId,
        description,
      })
      return response.data
    } catch (err) {
      console.error('Error creating sprint request! ', err)
      throw err
    }
  }
}
