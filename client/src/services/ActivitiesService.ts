import BaseService from './BaseService'

export default class SprintsService extends BaseService {
  async fetchActivityById(id: number): Promise<Array<any>> {
    const response = await this.client.get(`activities/${id}`)
    return response.data
  }

  async fetchActivityBySprintId(sprintId: number): Promise<Array<any>> {
    const response = await this.client.get(`activities/findBySprintId/${sprintId}`)
    return response.data
  }

  async createActivity(name, sprintId, description): Promise<any> {
    try {
      const response = await this.client.post('activities', {
        name,
        sprint_id: sprintId,
        description,
      })
      return response.data
    } catch (err) {
      console.error('Error creating activity request! ', err)
      throw err
    }
  }

  async toggleActivityStatus(activityId): Promise<void> {
    try {
      await this.client.put(`activities/${activityId}/toggle`)
    } catch (err) {
      console.error('Error toggling status request! ', err)
      throw err
    }
  }

}
