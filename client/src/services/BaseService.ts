import httpClient, { HttpClient } from '../utils/httpClient'

export default class BaseService {
  client: HttpClient

  constructor() {
    this.client = httpClient
  }
}
